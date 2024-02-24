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
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const klikDiLuar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        batalHapus();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        batalHapus();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", klikDiLuar);
      document.addEventListener("keydown", klikEscape);
    } else {
      document.removeEventListener("mousedown", klikDiLuar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikDiLuar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [membuka, batalHapus]);

  if (!membuka) return null;

  return (
    <div className="fixed top-0 z-10 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modal}
        className="bg-gray-100 p-6 rounded-lg border-t-2 border-b-2 border-blue-500"
      >
        <div className="p-4">
          <p className="font-description">Do you want to delete this item?</p>
        </div>
        <div className="flex items-center justify-between p-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500 font-prefix"
            onClick={() => {
              konfirmasiHapus();
            }}
          >
            Yes
          </button>

          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500 font-prefix"
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
