import { IconSettings, IconX } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
import ButtonBahasa from "./ButtonBahasa";
import DarkMode from "./DarkMode";

const MenuModal = () => {
  const [membuka, mengaturMembuka] = useState(false);
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function klikLuar(klik: { target: any }) {
      if (modal.current && !modal.current.contains(klik.target)) {
        mengaturMembuka(false);
      }
    }

    function klikESC(event: KeyboardEvent) {
      if (event.key === "Escape") {
        mengaturMembuka(false);
      }
    }

    document.addEventListener("mousedown", klikLuar);
    document.addEventListener("keydown", klikESC);

    return () => {
      document.removeEventListener("mousedown", klikLuar);
      document.removeEventListener("keydown", klikESC);
    };
  }, [modal]);

  const menutupModal = () => {
    mengaturMembuka(!membuka);
  };

  return (
    <div>
      <button
        onClick={menutupModal}
        className="flex items-center justify-between"
      >
        <IconSettings className="stroke-1" />
      </button>

      {membuka && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-6">
          <div
            ref={modal}
            className="bg-gray-200  p-6 rounded-lg shadow-md max-w-md relative"
          >
            <button
              onClick={menutupModal}
              className="absolute top-0 right-0 p-2"
            >
              <IconX />
            </button>

            <div className="p-4 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h1>settings</h1>
                <p>set language and theme</p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <ButtonBahasa />
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuModal;
