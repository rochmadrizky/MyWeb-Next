"use client";

import { useState } from "react";
import Modal from "./Modal";
import { IconClick, IconHandClick } from "@tabler/icons-react";

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
      <div className="px-6">
        <div className="bg-gray-100 rounded-lg border-t-2 border-b-2 border-blue-500">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="p-2 text-center">
              <h1 className="text-xl font-bold">To-do list or whatever</h1>
              <p>Want to add to the list of dependents?</p>
              <p>Please click the button below.</p>
            </div>

            <div className="flex items-center justify-center p-2">
              <button
                className="py-2 px-6 rounded-lg border-t-2 border-b-2 border-blue-500 bg-gray-200"
                onClick={() => mengaturMembukaModal(true)}
              >
                <IconClick className="hidden lg:block text-blue-500" />
                <IconHandClick className=" block lg:hidden text-blue-500" />
              </button>
            </div>
          </div>
        </div>
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
