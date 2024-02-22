import React, { useRef, useEffect } from "react";

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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        batalHapus();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        batalHapus();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [membuka, batalHapus]);

  if (!membuka) return null;

  return (
    <div className="fixed top-0 z-10 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-gray-100 p-6 rounded-lg border-t-2 border-b-2 border-blue-500"
      >
        <div className="p-4">
          <p>Do you want to delete this item?</p>
        </div>
        <div className="flex items-center justify-between p-2">
          <button
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={() => {
              konfirmasiHapus();
            }}
          >
            Yes
          </button>

          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={() => {
              batalHapus();
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
