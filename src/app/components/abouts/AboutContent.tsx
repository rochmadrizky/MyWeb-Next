"use client";

import React, { useEffect } from "react";

const tentang = [
  {
    posisi: "1",
    judul: "1",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, dignissimos consectetur nesciunt labore deleniti illum quaerat ullam tempore at nobis repellendus laboriosam, quis accusantium qui est! Magni veniam dignissimos, libero distinctio animi placeat, laboriosam voluptate porro recusandae?",
  },
  {
    posisi: "2",
    judul: "2",
    deskripsi:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
  },
  {
    posisi: "3",
    judul: "3",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, dignissimos consectetur nesciunt labore deleniti illum quaerat ullam tempore at nobis repellendus laboriosam, quis accusantium qui est! Magni veniam dignissimos, libero distinctio animi placeat, laboriosam voluptate porro recusandae?",
  },
  {
    posisi: "4",
    judul: "4",
    deskripsi:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
  },
  {
    posisi: "5",
    judul: "5",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, dignissimos consectetur nesciunt labore deleniti illum quaerat ullam tempore at nobis repellendus laboriosam, quis accusantium qui est! Magni veniam dignissimos, libero distinctio animi placeat, laboriosam voluptate porro recusandae?",
  },
];

const AboutContent = () => {
  const [konten, mengaturKonten] = React.useState(tentang[0]);
  const [posisi, mengaturPosisi] = React.useState<number | null>(null);

  useEffect(() => {
    mengaturPosisi(0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="bg-gray-100 rounded-2xl p-8 border-t-2 border-b-2 border-blue-500">
        <h1 className="text-xl text-center md:text-2xl font-title">
          {konten.judul}
        </h1>

        <div className="md:w-[1200px] md:h-56 mx-auto bg-gray-200 rounded-2xl border-t-2 border-b-2 border-blue-500 p-6 m-10 flex items-center justify-center">
          <div className="max-w-md md:max-w-4xl">
            <p className="font-description text-center">{konten.deskripsi}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-12">
          {tentang.map((bagian, urutan) => (
            <button
              key={urutan}
              onClick={() => {
                mengaturKonten(bagian);
                mengaturPosisi(urutan);
              }}
            >
              <div
                className={`bg-gray-200 px-4 py-2 ${
                  posisi === urutan
                    ? "rounded-xl border-t-2 border-b-2 border-blue-500"
                    : "bg-transparent"
                }`}
              >
                <h1 className="text-blue-500 font-prefix">{bagian.posisi}</h1>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
