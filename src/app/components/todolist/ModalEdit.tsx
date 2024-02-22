import React, { useState, useEffect, useRef } from "react";

interface ModalEditProps {
  membuka: boolean;
  konfirmasiEdit: (editTugas: string) => void;
  batalEdit: () => void;
  tugas: string;
}

const ModalEdit: React.FC<ModalEditProps> = ({
  membuka,
  konfirmasiEdit,
  batalEdit,
  tugas,
}) => {
  const [editListTugas, mengaturEditListTugas] = useState<string>(tugas || "");
  const [pesanError, mengaturPesanError] = useState<string>("");

  useEffect(() => {
    mengaturEditListTugas(tugas || "");
  }, [tugas]);

  const mengaturPerubahan = (list: React.ChangeEvent<HTMLInputElement>) => {
    mengaturEditListTugas(list.target.value);
    mengaturPesanError("");
  };

  const mengaturEdit = () => {
    if (editListTugas.trim() !== "") {
      konfirmasiEdit(editListTugas);
      mengaturEditListTugas("");
    } else {
      mengaturPesanError("cannot save if empty");
    }
  };

  const mengaturBatal = () => {
    batalEdit();
    mengaturEditListTugas("");
    mengaturPesanError("");
  };

  const modal = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const klikDiLuar = (klik: MouseEvent) => {
    if (modal.current && !modal.current.contains(klik.target as Node)) {
      batalEdit();
    }
  };

  const klikEscape = (klik: KeyboardEvent) => {
    if (klik.key === "Escape") {
      batalEdit();
    }
  };

  const klikEnter = (klik: React.KeyboardEvent<HTMLInputElement>) => {
    if (klik.key === "Enter") {
      mengaturEdit();
    }
  };

  useEffect(() => {
    if (membuka) {
      document.addEventListener("mousedown", klikDiLuar);
      document.addEventListener("keydown", klikEscape);

      if (input.current) {
        input.current.focus();
      }
    } else {
      document.removeEventListener("mousedown", klikDiLuar);
      document.removeEventListener("keydown", klikEscape);
    }
    return () => {
      document.removeEventListener("mousedown", klikDiLuar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [membuka]);

  useEffect(() => {
    if (!membuka) {
      mengaturPesanError("");
    }
  }, [membuka]);

  return (
    <div
      className={`fixed top-0 z-10 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center ${
        membuka ? "visible" : "hidden"
      }`}
    >
      <div
        ref={modal}
        className="w-72 md:w-96 bg-gray-100 border-t-2 border-b-2 border-blue-500 p-4 rounded-lg"
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2 text-center">Edit Task</h2>
          <input
            ref={input}
            className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2 bg-gray-200"
            name="edit"
            placeholder="Change items here"
            type="text"
            value={editListTugas}
            onChange={mengaturPerubahan}
            onKeyPress={klikEnter}
          />
          {pesanError && membuka && (
            <p className="text-blue-300 text-sm pt-2 text-center">
              {pesanError}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={mengaturEdit}
          >
            Save
          </button>

          <button
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500"
            onClick={mengaturBatal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
