import React from "react";

interface SearchDropdownProps {
  opsional: string[];
  deskripsi: string[];
  opsiYangDipilih: number;
  menanganiPilihan: (option: string) => void;
  mengaturOpsiYangDipilih: (index: number) => void;
  pencarianDalamModal: string;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  opsional,
  deskripsi,
  opsiYangDipilih,
  menanganiPilihan,
  mengaturOpsiYangDipilih,
  pencarianDalamModal,
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-full bg-white rounded-b-lg shadow-lg z-10 overflow-hidden">
      {opsional.map((opsi, isi) => {
        const awalIndex = opsi
          .toLowerCase()
          .indexOf(pencarianDalamModal.toLowerCase());
        const penandaOpsi = (
          <span>
            {opsi.substring(0, awalIndex)}
            <mark>
              {opsi.substring(
                awalIndex,
                awalIndex + pencarianDalamModal.length
              )}
            </mark>
            {opsi.substring(awalIndex + pencarianDalamModal.length)}
          </span>
        );

        return (
          <li
            key={isi}
            className={`px-4 py-2 ${
              opsi === "results not found"
                ? "text-gray-500 cursor-default"
                : "cursor-pointer hover:bg-gray-200"
            } ${opsiYangDipilih === isi ? "bg-gray-300" : ""}`}
            onClick={() => {
              if (opsi !== "results not found") {
                menanganiPilihan(opsi);
              }
            }}
            onMouseEnter={() => {
              if (opsi !== "results not found") {
                mengaturOpsiYangDipilih(isi);
              }
            }}
          >
            {opsi === "results not found" ? (
              opsi
            ) : (
              <div>
                {penandaOpsi}
                {deskripsi[isi] && (
                  <p className="text-sm text-gray-500">
                    {deskripsi[isi]
                      .toLowerCase()
                      .includes(pencarianDalamModal.toLowerCase())
                      ? deskripsi[isi]
                          .split(new RegExp(`(${pencarianDalamModal})`, "gi"))
                          .map((pecahan, index) =>
                            pecahan.toLowerCase() ===
                            pencarianDalamModal.toLowerCase() ? (
                              <mark key={index}>{pecahan}</mark>
                            ) : (
                              <span key={index}>{pecahan}</span>
                            )
                          )
                      : deskripsi[isi]}
                  </p>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchDropdown;
