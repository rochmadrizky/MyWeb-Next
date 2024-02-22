import React, { useState, useEffect, useRef } from "react";

interface ModalEditProps {
  membuka: boolean;
  konfirmasiEdit: (editedTask: string) => void;
  batalEdit: () => void;
  task: string;
}

const ModalEdit: React.FC<ModalEditProps> = ({
  membuka,
  konfirmasiEdit,
  batalEdit,
  task,
}) => {
  const [editedTask, setEditedTask] = useState<string>(task || "");

  useEffect(() => {
    setEditedTask(task || "");
  }, [task]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const handleEdit = () => {
    konfirmasiEdit(editedTask);
    setEditedTask("");
  };

  const handleCancel = () => {
    batalEdit();
    setEditedTask("");
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Menambahkan ref untuk input

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      batalEdit();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      batalEdit();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEdit();
    }
  };

  useEffect(() => {
    if (membuka) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);

      // Fokus otomatis pada input saat modal terbuka
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [membuka]);

  return (
    <div
      className={`fixed top-0 z-10 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center ${
        membuka ? "visible" : "hidden"
      }`}
    >
      <div ref={modalRef} className="w-72 md:w-96 bg-gray-100 p-4 rounded-lg">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Edit Task</h2>
          <input
            ref={inputRef}
            className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2 bg-gray-200"
            name="edit"
            placeholder="Change items here"
            type="text"
            value={editedTask}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="flex items-center justify-between p-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={handleEdit}
          >
            Save
          </button>

          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
