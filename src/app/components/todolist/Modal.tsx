import { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (membuka && input.current) {
      input.current.focus();
    }
  }, [membuka]);

  useEffect(() => {
    const klikMoudeDiluar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        menutup();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        menutup();
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

  if (!membuka) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div ref={modal} className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Add Todo</h2>
          <input
            ref={input}
            type="text"
            name="todolist"
            className="py-2 px-3 mb-4 border border-gray-300 w-full"
            value={inputTeks}
            onChange={(e) => mengaturInputTeks(e.target.value)}
            onKeyPress={klikEnter}
          />
          <div className="flex justify-end">
            <button
              className="py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 mr-2"
              onClick={menanganiTambahkanTugas}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
