"use client";

import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
import { useState, useRef } from "react";

const IsiCarousel = () => {
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
  const [titikAktif, mengaturTitikAktif] = useState(0);
  const penggeser = useRef<HTMLDivElement>(null);

  const sebelumnya = () => {
    const pengechekan =
      indeksSaatIni === 0 ? konten.length - 1 : indeksSaatIni - 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const selanjutnya = () => {
    const pengechekan =
      indeksSaatIni === konten.length - 1 ? 0 : indeksSaatIni + 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const tekanMouse = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if ("touches" in event) {
      mengaturSeretDariX(event.touches[0].pageX);
    } else {
      mengaturSeretDariX(event.pageX);
    }
  };

  const pergerakanMouse = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (seretDariX === 0 || !penggeser.current) return;

    let posisiX;
    if ("touches" in event) {
      posisiX = event.touches[0].pageX;
    } else {
      posisiX = event.pageX;
    }

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

  const titik = konten.map((_, urutan) => (
    <span
      key={urutan}
      className={`h-3 w-3 bg-black ring-white ring-1 rounded-full mx-1 cursor-pointer ${
        urutan === titikAktif && "bg-white"
      }`}
      onClick={() => ubahKontenDenganTitik(urutan)}
    />
  ));

  const ubahKontenDenganTitik = (urutanIndex: number) => {
    mengaturTitikAktif(urutanIndex);
    mengaturIndeksSaatIni(urutanIndex);
  };

  return (
    <div>
      <div
        className="md:max-w-[1400px] h-[480px] w-full m-auto px-4 flex items-center justify-center gap-1"
        ref={penggeser}
        onMouseDown={tekanMouse}
        onMouseMove={pergerakanMouse}
        onMouseUp={lepasKlikMouse}
        onTouchStart={tekanMouse}
        onTouchMove={pergerakanMouse}
        onTouchEnd={lepasKlikMouse}
      >
        <button
          onClick={sebelumnya}
          className={`${
            indeksSaatIni === 0 ? "pointer-events-none" : "pointer-events-auto"
          } bg-black rounded-full p-3`}
        >
          <IconPlayerTrackPrev className="text-white" />
        </button>

        <div
          className="w-full h-full rounded-3xl overflow-hidden bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${konten[indeksSaatIni].gambar})` }}
        >
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center relative">
            <div className="text-center text-white p-4">
              <h2 className="text-3xl font-bold mb-4">
                {konten[indeksSaatIni].judul}
              </h2>
              <p className="text-lg">{konten[indeksSaatIni].deskripsi}</p>
            </div>

            <div className="flex items-center justify-center bottom-5 absolute">
              {titik}
            </div>
          </div>
        </div>

        <button
          onClick={selanjutnya}
          className={`${
            indeksSaatIni === konten.length - 1
              ? "pointer-events-none"
              : "pointer-events-auto"
          } bg-black rounded-full p-3`}
        >
          <IconPlayerTrackNext className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default IsiCarousel;