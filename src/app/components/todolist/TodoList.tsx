"use client";

import { useState } from "react";
import Modal from "./Modal";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import ModalDeleteAll from "./ModalDeleteAll";
import {
  IconClick,
  IconHandClick,
  IconEdit,
  IconTrash,
  IconClearAll,
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
  const [semuaDipilih, mengaturSemuaDipilih] = useState<boolean>(false);
  const [pilihanItem, mengaturPilihanItem] = useState<boolean[]>([]);
  const [selectAllClicked, setSelectAllClicked] = useState<boolean>(false);

  const [membukaModalKonfirmasi, mengaturMembukaModalKonfirmasi] =
    useState(false);

  const tampilkanModalKonfirmasi = () => {
    mengaturMembukaModalKonfirmasi(true);
  };

  const mengurutkanTugas = (mengurutkan: string) => {
    mengaturTugas([mengurutkan, ...tugas]);
    mengaturPilihanItem([false, ...pilihanItem]);
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
    // Mengatur ulang tugas dan pilihanItem setelah penghapusan
    const tugasBaru = tugas.filter((_, i) => i !== indeksHapus);
    const pilihanBaru = pilihanItem.filter((_, i) => i !== indeksHapus);
    mengaturTugas(tugasBaru);
    mengaturPilihanItem(pilihanBaru);

    // Menutup modal hapus dan mengatur indeksHapus kembali ke nilai awal
    mengaturMembukaModalHapus(false);
    mengaturIndeksHapus(-1);

    // Reset checkbox selectAll jika pengguna mengonfirmasi penghapusan
    mengaturSemuaDipilih(false);
    setSelectAllClicked(false); // Reset status "Select All" yang telah diklik
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

  const chekboxPilihSemua = () => {
    const seleksiBaru = !semuaDipilih;
    mengaturSemuaDipilih(seleksiBaru);
    // Mengatur status "Select All" yang telah diklik
    setSelectAllClicked(true);
    mengaturPilihanItem(pilihanItem.map(() => seleksiBaru));
  };

  const chekboxPilihItem = (index: number) => {
    const seleksiBaru = !pilihanItem[index];
    mengaturPilihanItem([
      ...pilihanItem.slice(0, index),
      seleksiBaru,
      ...pilihanItem.slice(index + 1),
    ]);
    // Jika "Select All" telah diklik sebelumnya, tidak mengubah status "Select All"
    if (selectAllClicked) {
      setSelectAllClicked(false);
    }
  };

  const hapusSemuaTugasTerpilih = () => {
    const tugasBaru = tugas.filter((_, i) => !pilihanItem[i]);
    const pilihanBaru = pilihanItem.filter((_, i) => !pilihanItem[i]);
    mengaturTugas(tugasBaru);
    mengaturPilihanItem(pilihanBaru);
    // Hanya mengatur kembali status "Select All" jika tidak ada yang dipilih setelah menghapus
    if (pilihanBaru.length === 0) {
      mengaturSemuaDipilih(false);
      setSelectAllClicked(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="p-8">
          <div className="bg-gray-100 rounded-lg border-t-2 border-b-2 border-blue-500">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="p-2 text-center">
                <h1 className="text-xl font-prefix">To-do list or whatever</h1>
                <p className="font-description">
                  Want to add to the list of dependents?
                </p>
                <p className="font-description">
                  Please click the button below.
                </p>
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
              <h1 className="text-xl font-prefix">Note your list</h1>
              <p className="font-description">
                The to-do list or whatever, you wrote will appear here.
              </p>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg">
              {tugas.length === 0 && (
                <p className="p-2 text-gray-400 text-center rounded-xl font-description">
                  For now it is still empty
                </p>
              )}

              {tugas.length > 0 && (
                <div className="flex items-center justify-between px-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      name="chek"
                      checked={semuaDipilih}
                      onChange={chekboxPilihSemua}
                    />
                    <span className="ml-2 font-prefix">Select All</span>
                  </label>

                  <button
                    onClick={tampilkanModalKonfirmasi}
                    disabled={
                      !semuaDipilih &&
                      pilihanItem.filter((item) => item).length === 0
                    }
                  >
                    <IconClearAll />
                  </button>
                </div>
              )}

              {tugas.map((urutan, list) => (
                <li
                  key={list}
                  className="flex justify-between items-center py-2 border-b border-blue-500 rounded-lg px-2"
                >
                  <span className="font-description">{urutan}</span>

                  <div className="flex items-center gap-2">
                    {semuaDipilih ||
                    (pilihanItem.length > 0 && pilihanItem[list]) ? (
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="chek"
                          className="h-4 w-4"
                          checked={pilihanItem[list]}
                          onChange={() => chekboxPilihItem(list)}
                        />
                      </label>
                    ) : null}

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

        <ModalDeleteAll
          membuka={membukaModalKonfirmasi}
          konfirmasiHapus={hapusSemuaTugasTerpilih}
          batalHapus={() => mengaturMembukaModalKonfirmasi(false)}
        />

        <ModalEdit
          membuka={membukaModalEdit}
          konfirmasiEdit={konfirmasiEdit}
          batalEdit={batalEdit}
          tugas={tugas[indeksEdit]}
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
