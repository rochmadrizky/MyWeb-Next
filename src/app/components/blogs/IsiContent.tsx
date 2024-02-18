"use client";

import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
import { useState, useRef } from "react";

const IsiContent = () => {
  const konten = [
    {
      gambar:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      judul: "Coding.",
      deskripsi:
        "Every day I always practice coding to increase my skills and knowledge, my field is Front-End Developers.",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      judul: "Coding.",
      deskripsi:
        "Every day I always practice coding to increase my skills and knowledge, my field is Front-End Developers.",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      judul: "Coding.",
      deskripsi:
        "Every day I always practice coding to increase my skills and knowledge, my field is Front-End Developers.",
    },

    {
      gambar:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      judul: "Coding.",
      deskripsi:
        "Every day I always practice coding to increase my skills and knowledge, my field is Front-End Developers.",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      judul: "Coding.",
      deskripsi:
        "Every day I always practice coding to increase my skills and knowledge, my field is Front-End Developers.",
    },
  ];

  const [indeksSaatIni, mengaturIndeksSaatIni] = useState(0);
  const [seretDariX, mengaturSeretDariX] = useState(0);
  const penggeser = useRef<HTMLDivElement>(null);

  const sebelumnya = () => {
    const pengechekan =
      indeksSaatIni === 0 ? konten.length - 1 : indeksSaatIni - 1;
    mengaturIndeksSaatIni(pengechekan);
  };

  const selanjutnya = () => {
    const pengechekan =
      indeksSaatIni === konten.length - 1 ? 0 : indeksSaatIni + 1;
    mengaturIndeksSaatIni(pengechekan);
  };

  const tekanMouse = (klik: React.MouseEvent<HTMLDivElement>) => {
    mengaturSeretDariX(klik.pageX);
  };

  const pergerakanMouse = (geser: React.MouseEvent<HTMLDivElement>) => {
    if (seretDariX === 0 || !penggeser.current) return;

    const posisiX = geser.pageX;
    const perbedaan = posisiX - seretDariX;

    if (perbedaan > 50 && indeksSaatIni !== konten.length - 1) {
      selanjutnya();
      mengaturSeretDariX(0);
    } else if (perbedaan < -50 && indeksSaatIni !== 0) {
      sebelumnya();
      mengaturSeretDariX(0);
    }
  };

  const lepasKlikMouse = () => {
    mengaturSeretDariX(0);
  };

  return (
    <div
      className="md:max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
      ref={penggeser}
      onMouseDown={tekanMouse}
      onMouseMove={pergerakanMouse}
      onMouseUp={lepasKlikMouse}
    >
      <div
        className="w-full h-full rounded-3xl overflow-hidden bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${konten[indeksSaatIni].gambar})` }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              {konten[indeksSaatIni].judul}
            </h2>
            <p className="text-lg">{konten[indeksSaatIni].deskripsi}</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          indeksSaatIni === 0 ? "pointer-events-none" : "pointer-events-auto"
        } group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
      >
        <IconPlayerTrackPrev onClick={sebelumnya} />
      </div>

      <div
        className={`${
          indeksSaatIni === konten.length - 1
            ? "pointer-events-none"
            : "pointer-events-auto"
        } group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
      >
        <IconPlayerTrackNext onClick={selanjutnya} />
      </div>
    </div>
  );
};

export default IsiContent;
