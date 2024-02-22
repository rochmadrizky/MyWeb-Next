"use client";

import { useState } from "react";
import Modal from "./Modal";
import ModalDelete from "./ModalDelete";
import { IconClick, IconHandClick } from "@tabler/icons-react";

const TodoList = () => {
  const [tugas, mengaturTugas] = useState<string[]>([]);
  const [membukaModalTambah, setMembukaModalTambah] = useState<boolean>(false);
  const [input, mengaturInput] = useState<string>("");
  const [indeksHapus, setIndeksHapus] = useState<number>(-1);
  const [membukaModalHapus, setMembukaModalHapus] = useState<boolean>(false);

  const mengurutkanTugas = (mengurutkan: string) => {
    mengaturTugas([mengurutkan, ...tugas]);
  };

  const hapusListTugas = (index: number) => {
    setIndeksHapus(index);
    setMembukaModalHapus(true);
  };

  const konfirmasiHapus = () => {
    const tugasBaru = tugas.filter((_, i) => i !== indeksHapus);
    mengaturTugas(tugasBaru);
    setMembukaModalHapus(false);
    setIndeksHapus(-1);
  };

  const batalHapus = () => {
    setMembukaModalHapus(false);
    setIndeksHapus(-1);
  };

  const menutupModalTambah = () => {
    setMembukaModalTambah(false);
    mengaturInput("");
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
                onClick={() => setMembukaModalTambah(true)}
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
        membuka={membukaModalTambah}
        menutup={menutupModalTambah}
        menambahkanTugas={(tugas) => {
          mengurutkanTugas(tugas);
          menutupModalTambah();
        }}
        inputTeks={input}
        mengaturInputTeks={mengaturInput}
      />

      <ModalDelete
        membuka={membukaModalHapus}
        konfirmasiHapus={konfirmasiHapus}
        batalHapus={batalHapus}
      />
    </div>
  );
};

export default TodoList;
