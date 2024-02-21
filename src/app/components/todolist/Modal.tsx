import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTodo: (todo: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onAddTodo,
  inputValue,
  setInputValue,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      onAddTodo(inputValue);
      setInputValue("");
      onClose();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div ref={modalRef} className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Add Todo</h2>
          <input
            ref={inputRef}
            type="text"
            name="todolist"
            className="py-2 px-3 mb-4 border border-gray-300 w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="flex justify-end">
            <button
              className="py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 mr-2"
              onClick={handleAddTodo}
            >
              Add
            </button>
            <button
              className="py-2 px-4 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
