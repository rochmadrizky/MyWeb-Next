import Link from "next/link";
import React from "react";

const BLogContent = () => {
  const konten = [
    {
      gambar: "/gambar/carousel.jpeg",
      judul: "Slider Image",
      deskripsi:
        "Using slide images for efficiency and space, also makes the content dynamic.",
      link: "/carousel",
    },
    {
      gambar: "/gambar/list.jpeg",
      judul: "To-do List",
      deskripsi:
        "I make a list of notes or daily tasks, with a simple appearance.",
      link: "/todolist",
    },
    {
      gambar: "/gambar/tictac.jpeg",
      judul: "Tic Tac Toe",
      deskripsi: "Create an old game with a simple appearance, you can try it.",
      link: "/games",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {konten.map((isi, urutan) => (
          <Link
            href={isi.link}
            key={urutan}
            className="bg-gray-100 border-t-2 border-b-2 border-blue-500 rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex items-center justify-center ">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={isi.gambar}
                  alt={isi.judul}
                  className="w-full h-44 transform hover:scale-110 hover:rotate-6 duration-200 object-cover"
                />

                <div className="text-center p-2">
                  <h1 className="font-prefix text-lg">{isi.judul}</h1>
                  <p className="font-description p-1">{isi.deskripsi}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BLogContent;
