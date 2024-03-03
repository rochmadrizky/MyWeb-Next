import {
  IconCodeDots,
  IconCommand,
  IconHeartCode,
  IconRocket,
  IconRoute,
} from "@tabler/icons-react";
import React from "react";

const jalanPintas = [
  {
    icon: IconCommand,
    pintasan1: "+ I",
    pintasan2: "CTRL + I",
    deskripsi: "To open my handsome photo haha.",
  },
  {
    icon: IconCommand,
    pintasan1: "+ K",
    pintasan2: "CTRL + K",
    deskripsi: "To open the search menu.",
  },
  {
    icon: IconCommand,
    pintasan1: "+ U",
    pintasan2: "CTRL + U",
    deskripsi: "To open notifications.",
  },
  {
    icon: IconCommand,
    pintasan1: "+ E",
    pintasan2: "CTRL + E",
    deskripsi: "To open this day and hour.",
  },
];

const Content = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-2 p-4 border-2 border-blue-500 rounded-xl bg-gray-100">
          <div className="p-2">
            <div>
              <IconRocket className="w-10 h-10 stroke-1" />
            </div>
          </div>

          <div className="p-2">
            <h1 className="font-prefix text-lg">Heads up!</h1>
            <p className="font-description">
              On my website there are many secret shortcuts.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-2 border-l-2 border-r-2 border-blue-500 rounded-xl">
          <div className="p-1">
            <IconCodeDots />
          </div>

          <div className="p-1">
            <h1 className="font-title text-2xl">
              Greetings, semicolon code friends.
            </h1>
          </div>
        </div>

        <div className="max-w-lg mx-auto border-2 border-blue-500 bg-gray-100 rounded-xl flex items-center justify-center gap-2 p-4">
          <div className="p-2">
            <p className="font-title">
              Code is an art, and writing code is a pleasure for me.
            </p>
            <p className="font-title">
              creating a display or content experiment in code, and succeeding
              is a tremendous feeling of pride.
            </p>
          </div>

          <div className="p-2">
            <IconHeartCode className="w-10 h-10 stroke-1" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="max-w-sm border-t-2 border-blue-500 rounded-xl p-2">
          <div className="flex items-center justify-center gap-2 p-1">
            <IconRoute />
            <h1 className=" font-prefix text-xl">Secret shortcut route!</h1>
          </div>

          <div className="text-center p-1">
            <p className="font-description">
              If you are using a MacOS or Windows operating system computer,
              please try the shortcut below.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="text-center p-2">
            <h1 className="font-prefix text-lg">Windows & MacOS</h1>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {jalanPintas.map((urutan, pintas) => (
              <div
                key={pintas}
                className="p-2 border-2 border-blue-500 rounded-xl max-w-xs flex flex-col items-center justify-center bg-gray-100"
              >
                <div className="flex items-center">
                  <urutan.icon />
                  <h1>{urutan.pintasan1}</h1>
                </div>

                <div className="p-1">
                  <h1 className="font-description">{urutan.pintasan2}</h1>
                </div>

                <div className="p-1 text-center">
                  <p>{urutan.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
