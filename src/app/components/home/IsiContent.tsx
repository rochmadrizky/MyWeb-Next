import React from "react";
import {
  IconActivity,
  IconCode,
  IconCoffee,
  IconQuotes,
} from "@tabler/icons-react";

const IsiContent = () => {
  const konten = [
    {
      icon: <IconCode />,
      judul: "Coding.",
      deskripsi:
        "Every day I always conduct website display coding experiments, and don't forget to record them on my <a href='/blogs' class='text-blue-500 text-xl'>Blogs</a> page.",
    },
    {
      icon: <IconCoffee />,
      judul: "Inspiration.",
      deskripsi:
        "By the way, coffee and cigarettes are one of the driving forces of inspiration for me.",
    },
    {
      icon: <IconActivity />,
      judul: "Activity.",
      deskripsi:
        "Sometimes during my busy schedule, I always make time for sport, namely boxing.",
    },
    {
      icon: <IconQuotes />,
      judul: "Quotes.",
      deskripsi:
        '"All days are beautiful, if they are with You." just kidding, relax, friend. hehe',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {konten.map((isi, urutan) => (
          <div
            key={urutan}
            className="bg-gray-100 border-b-2 border-blue-500 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <div className="p-8">
                <div className=" flex flex-col items-center justify-center">
                  <div className="p-4 text-blue-500">{isi.icon}</div>
                  <div className="text-center">
                    <h1 className="font-prefix text-xl">{isi.judul}</h1>
                    <p
                      className="font-description py-2"
                      dangerouslySetInnerHTML={{ __html: isi.deskripsi }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsiContent;
