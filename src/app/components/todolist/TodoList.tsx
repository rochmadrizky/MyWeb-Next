"use client";

import { useState } from "react";
import Modal from "./Modal";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import {
  IconClick,
  IconHandClick,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

const TodoList = () => {
  const [tugas, mengaturTugas] = useState<string[]>([]);
  const [membukaModalTambah, mengaturMembukaModalTambah] =
    useState<boolean>(false);
  const [input, mengaturInput] = useState<string>("");
  const [indeksHapus, mengaturIndeksHapus] = useState<number>(-1);
  const [membukaModalHapus, mengaturMembukaModalHapus] =
    useState<boolean>(false);
  const [indeksEdit, mengaturIndeksEdit] = useState<number>(-1);
  const [membukaModalEdit, mengaturMembukaModalEdit] = useState<boolean>(false);

  const mengurutkanTugas = (mengurutkan: string) => {
    mengaturTugas([mengurutkan, ...tugas]);
  };

  const hapusListTugas = (listTugas: number) => {
    mengaturIndeksHapus(listTugas);
    mengaturMembukaModalHapus(true);
  };

  const editListTugas = (tugas: number) => {
    mengaturIndeksEdit(tugas);
    mengaturMembukaModalEdit(true);
  };

  const konfirmasiHapus = () => {
    const tugasBaru = tugas.filter((_, i) => i !== indeksHapus);
    mengaturTugas(tugasBaru);
    mengaturMembukaModalHapus(false);
    mengaturIndeksHapus(-1);
  };

  const konfirmasiEdit = (editTugas: string) => {
    const tugasBaru = [...tugas];
    tugasBaru[indeksEdit] = editTugas;
    mengaturTugas(tugasBaru);
    mengaturMembukaModalEdit(false);
    mengaturIndeksEdit(-1);
  };

  const batalHapus = () => {
    mengaturMembukaModalHapus(false);
    mengaturIndeksHapus(-1);
  };

  const batalEdit = () => {
    mengaturMembukaModalEdit(false);
    mengaturIndeksEdit(-1);
  };

  const menutupModalTambah = () => {
    mengaturMembukaModalTambah(false);
    mengaturInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="p-8">
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
                  onClick={() => mengaturMembukaModalTambah(true)}
                >
                  <IconClick className="hidden lg:block text-blue-500" />
                  <IconHandClick className=" block lg:hidden text-blue-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="p-4 bg-gray-100 border-t-2 border-b-2 border-blue-500 rounded-lg">
            <div className="text-center p-4">
              <h1 className="text-xl font-bold">Note your list</h1>
              <p>The to-do list or whatever, you wrote will appear here.</p>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg">
              {tugas.length === 0 && (
                <p className="p-2 text-gray-400 text-center rounded-xl">
                  For now it is still empty
                </p>
              )}

              {tugas.map((urutan, list) => (
                <li
                  key={list}
                  className="flex justify-between items-center py-2 border-b border-blue-500 rounded-lg"
                >
                  <span>{urutan}</span>

                  <div className="flex items-center gap-2">
                    <button onClick={() => editListTugas(list)}>
                      <IconEdit />
                    </button>

                    <button onClick={() => hapusListTugas(list)}>
                      <IconTrash />
                    </button>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>

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

        <ModalEdit
          membuka={membukaModalEdit}
          konfirmasiEdit={konfirmasiEdit}
          batalEdit={batalEdit}
          task={tugas[indeksEdit]}
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8">
          <h1 className="font-prefix text-2xl">Notes:</h1>
          <p className="font-description">
            You can add to-do lists or whatever, and You can edit or delete
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
