import { IconSend, IconWriting } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  membuka: boolean;
  menutup: () => void;
  menambahkanTugas: (todo: string) => void;
  inputTeks: string;
  mengaturInputTeks: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  membuka,
  menutup,
  menambahkanTugas,
  inputTeks,
  mengaturInputTeks,
}) => {
  const modal = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [mengubahIcon, mengaturMengubahIcon] = useState<boolean>(false);

  useEffect(() => {
    if (membuka && input.current) {
      input.current.focus();
    }

    const klikMoudeDiluar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        menutup();
        mengaturMengubahIcon(false);
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        menutup();
        mengaturMengubahIcon(false);
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", klikMoudeDiluar);
      document.addEventListener("keydown", klikEscape);
    } else {
      document.removeEventListener("mousedown", klikMoudeDiluar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikMoudeDiluar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [membuka]);

  const menanganiTambahkanTugas = () => {
    if (inputTeks.trim() !== "") {
      menambahkanTugas(inputTeks);
      mengaturInputTeks("");
      menutup();
    }
  };

  const klikEnter = (klik: React.KeyboardEvent<HTMLInputElement>) => {
    if (klik.key === "Enter") {
      menanganiTambahkanTugas();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      mengaturMengubahIcon(false);
    } else {
      mengaturMengubahIcon(true);
    }
    mengaturInputTeks(e.target.value);
  };

  if (!membuka) return null;

  return (
    <div
      className={`fixed top-0 z-10 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 ${
        membuka ? "visible" : "hidden"
      }`}
    >
      <div ref={modal} className="w-72 md:w-96 top-20 rounded-lg absolute">
        <div className="p-2">
          <div className="flex items-center relative">
            <input
              ref={input}
              type="text"
              name="todolist"
              placeholder="Add to-do list here"
              className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2"
              value={inputTeks}
              onChange={handleChange}
              onKeyPress={klikEnter}
            />

            <button
              onClick={menanganiTambahkanTugas}
              className={`px-3 py-2 absolute top-0 right-0 transform ${
                mengubahIcon ? "rotate-45" : ""
              } transition duration-300`}
            >
              {mengubahIcon ? (
                <IconSend className=" -rotate-45" />
              ) : (
                <IconWriting />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
