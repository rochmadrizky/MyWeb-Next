"use client";

import { IconBell } from "@tabler/icons-react";
import React, { useState } from "react";

const ButtonNotif = () => {
  const [tampilkanModal, mengaturTampilkanModal] = useState(false);
  const [tampilkanNotifikasi, mengaturTampilkanNotifikasi] = useState(true);

  const klikModal = () => {
    mengaturTampilkanModal(!tampilkanModal);
  };

  const sembunyikanNotif = () => {
    mengaturTampilkanNotifikasi(false);
  };

  return (
    <div className="relative">
      <button onClick={klikModal}>
        <IconBell />
      </button>

      {tampilkanModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Modal Pesan</h2>
            <p>Ini adalah konten dari modal pesan.</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => {
                klikModal();
                sembunyikanNotif();
              }}
            >
              Tutup Modal
            </button>
          </div>
        </div>
      )}

      {tampilkanNotifikasi && !tampilkanModal && (
        <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0"></div>
      )}
    </div>
  );
};

export default ButtonNotif;
