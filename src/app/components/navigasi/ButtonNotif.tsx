"use client";

import { IconBell } from "@tabler/icons-react";
import React, { useState } from "react";
import ModalNotif from "./ModalNotif";

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

      <ModalNotif
        tampilkan={tampilkanModal}
        menutup={() => {
          klikModal();
          sembunyikanNotif();
        }}
      />

      {tampilkanNotifikasi && !tampilkanModal && (
        <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0"></div>
      )}
    </div>
  );
};

export default ButtonNotif;
