"use client";

import { useState } from "react";
import Modal from "./Modal";

const TodoList = () => {
  const [tugas, mengaturTugas] = useState<string[]>([]);
  const [membukaModal, mengaturMembukaModal] = useState<boolean>(false);
  const [input, mengaturResetInput] = useState<string>("");

  const mengurutkanTugas = (mengurutkan: string) => {
    mengaturTugas([mengurutkan, ...tugas]);
  };

  const hapusListTugas = (index: number) => {
    const tugasBaru = tugas.filter((_, i) => i !== index);
    mengaturTugas(tugasBaru);
  };

  const menutupModal = () => {
    mengaturMembukaModal(false);
    mengaturResetInput("");
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold">To-Do List</h1>
        <p>masih proses pengerjaan</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-600"
          onClick={() => mengaturMembukaModal(true)}
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4 px-8">
        {tugas.map((urutan, list) => (
          <li
            key={list}
            className="flex justify-between items-center py-2 border-b border-gray-300"
          >
            <span>{urutan}</span>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => hapusListTugas(list)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Modal
        membuka={membukaModal}
        menutup={menutupModal}
        menambahkanTugas={(tugas) => {
          mengurutkanTugas(tugas);
          menutupModal();
        }}
        inputTeks={input}
        mengaturInputTeks={mengaturResetInput}
      />
    </div>
  );
};

export default TodoList;
