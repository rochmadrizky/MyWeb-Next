import { IconSettings, IconX } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
import ButtonBahasa from "./ButtonBahasa";
import DarkMode from "./DarkMode";

const MenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [modalRef]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="flex items-center justify-between"
      >
        <IconSettings className="stroke-1" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 p-6">
          <div
            ref={modalRef}
            className="bg-gray-200  p-6 rounded-lg shadow-md max-w-md relative"
          >
            <button
              onClick={toggleModal}
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
