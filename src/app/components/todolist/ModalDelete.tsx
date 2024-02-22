import React, { useEffect, useRef } from "react";

interface ModalDeleteProps {
  membuka: boolean;
  konfirmasiHapus: () => void;
  batalHapus: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  membuka,
  konfirmasiHapus,
  batalHapus,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseModal = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".modal-content")
      ) {
        batalHapus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        batalHapus();
      } else if (event.key === "y" || event.key === "Y") {
        konfirmasiHapus();
      } else if (event.key === "t" || event.key === "T") {
        batalHapus();
      }
    };

    if (membuka) {
      document.body.addEventListener("click", handleCloseModal);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.removeEventListener("click", handleCloseModal);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [membuka, batalHapus, konfirmasiHapus]);

  useEffect(() => {
    const handleMobileKeyPress = (event: KeyboardEvent) => {
      if (event.key === "y" || event.key === "Y") {
        konfirmasiHapus();
      } else if (event.key === "t" || event.key === "T") {
        batalHapus();
      }
    };

    if (membuka && modalRef.current) {
      modalRef.current.addEventListener("keydown", handleMobileKeyPress);
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener("keydown", handleMobileKeyPress);
      }
    };
  }, [membuka, batalHapus, konfirmasiHapus]);

  if (!membuka) return null;

  return (
    <div className="fixed top-0 z-10 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg border-t-2 border-b-2 border-blue-500"
      >
        <div className="p-4">
          <p>Do you want to delete this item?</p>
        </div>
        <div className="flex items-center justify-between p-2">
          <button
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={konfirmasiHapus}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={batalHapus}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
