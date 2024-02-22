import { useEffect } from "react";

interface ModalDeleteProps {
  membuka: boolean;
  konfirmasiHapus: () => void;
  batalHapus: () => void;
  onClose: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  membuka,
  konfirmasiHapus,
  batalHapus,
  onClose,
}) => {
  useEffect(() => {
    const handleCloseModal = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".modal-content")
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "y" || event.key === "Y") {
        konfirmasiHapus();
        onClose();
      } else if (event.key === "t" || event.key === "T") {
        batalHapus();
        onClose();
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
  }, [membuka, onClose, konfirmasiHapus, batalHapus]);

  if (!membuka) return null;

  return (
    <div className="fixed top-0 z-10 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-100 p-6 rounded-lg border-t-2 border-b-2 border-blue-500">
        <div className="p-4">
          <p>Do you want to delete this item?</p>
        </div>
        <div className="flex items-center justify-between p-2">
          <button
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={() => {
              konfirmasiHapus();
              onClose();
            }}
          >
            Yes
          </button>

          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={() => {
              batalHapus();
              onClose();
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
