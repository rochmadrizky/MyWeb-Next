"use client";

import { IconBell } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ModalNotif from "./ModalNotif";

const ButtonNotif = () => {
  const [tampilkanModal, mengaturTampilkanModal] = useState(false);
  const [tampilkanNotifikasi, mengaturTampilkanNotifikasi] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the key combination is Command + U
      if (event.metaKey && event.key === "u") {
        // Toggle the modal
        if (tampilkanModal) {
          // Close the modal and hide notification
          mengaturTampilkanModal(false);
          mengaturTampilkanNotifikasi(false);
        } else {
          // Open the modal
          mengaturTampilkanModal(true);
        }
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup by removing event listener
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [tampilkanModal]); // Adding tampilkanModal to the dependency array

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
        <div className="w-2 h-2 bg-blue-500 animate-bounce rounded-full absolute top-0 right-0.5"></div>
      )}
    </div>
  );
};

export default ButtonNotif;
