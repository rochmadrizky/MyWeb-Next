import React from "react";

interface InputRatingProps {
  nilai: string;
  isi: (hasil: string) => void;
  pengganti: string;
  jenis: "text" | "textarea";
}

const InputRating: React.FC<InputRatingProps> = ({
  nilai,
  isi,
  pengganti,
  jenis,
}) => {
  const inputClass =
    jenis === "text" ? (
      <input
        name="nama"
        type="text"
        value={nilai}
        onChange={(e) => isi(e.target.value)}
        placeholder={pengganti}
        className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2 bg-gray-100 font-title"
      />
    ) : (
      <textarea
        name="deskripsi"
        value={nilai}
        onChange={(e) => isi(e.target.value)}
        placeholder={pengganti}
        className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2 bg-gray-100 font-prefix"
      />
    );

  return <div className="p-2 w-72 md:w-96">{inputClass}</div>;
};

export default InputRating;
