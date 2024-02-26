import { IconX } from "@tabler/icons-react";
import React, { useRef, useEffect } from "react";

type ModalProfileProps = {
  closeModal: () => void;
};

const ModalProfile: React.FC<ModalProfileProps> = ({ closeModal }) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const klikDiluar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        closeModal();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", klikDiluar);
    document.addEventListener("keydown", klikEscape);

    return () => {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [closeModal]);

  const lihatProfile = () => {
    closeModal();
  };

  const lihatStory = () => {
    closeModal();
  };

  return (
    <div className="fixed z-10 top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modal}
        className="max-w-md rounded-lg bg-slate-100 p-8 relative"
      >
        <div className="p-2 absolute top-0 right-0">
          <button onClick={closeModal} type="button">
            <IconX />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex flex-col gap-y-2">
            <button onClick={lihatProfile} className="text-black">
              Lihat Profil
            </button>

            <button onClick={lihatStory} className="text-black">
              Lihat Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfile;
