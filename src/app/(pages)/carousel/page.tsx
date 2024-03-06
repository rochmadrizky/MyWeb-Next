"use client";

import IsiCarousel from "@/app/components/carousel/IsiCarousel";
import {
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";
import { useState, useRef } from "react";

const page = () => {
  const konten = [
    {
      gambar:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      judul: "1",
      deskripsi: "This is the first part.",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      judul: "2",
      deskripsi: "This is the second part.",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      judul: "3",
      deskripsi: "This is the third part.",
    },

    {
      gambar:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      judul: "4",
      deskripsi: "This is the fourth part.",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      judul: "5",
      deskripsi: "This is the fifth or final part.",
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
    klik: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if ("touches" in klik) {
      mengaturSeretDariX(klik.touches[0].pageX);
    } else {
      mengaturSeretDariX(klik.pageX);
    }
  };

  const pergerakanMouse = (
    gerakan: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (seretDariX === 0 || !penggeser.current) return;

    let posisiX;
    if ("touches" in gerakan) {
      posisiX = gerakan.touches[0].pageX;
    } else {
      posisiX = gerakan.pageX;
    }

    const perbedaan = posisiX - seretDariX;

    if (perbedaan > 50 && indeksSaatIni !== 0) {
      sebelumnya();
      mengaturSeretDariX(0);
    } else if (perbedaan < -50 && indeksSaatIni !== konten.length - 1) {
      selanjutnya();
      mengaturSeretDariX(0);
    }
  };

  const lepasKlikMouse = () => {
    mengaturSeretDariX(0);
  };

  const titik = konten.map((_, urutan) => (
    <span
      key={urutan}
      className={`h-3 w-3 bg-black ring-blue-500 ring-1 rounded-full mx-1 cursor-pointer ${
        urutan === titikAktif && "bg-blue-500"
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
        className="h-[484px] flex items-center justify-center"
        ref={penggeser}
        onMouseDown={tekanMouse}
        onMouseMove={pergerakanMouse}
        onMouseUp={lepasKlikMouse}
        onTouchStart={tekanMouse}
        onTouchMove={pergerakanMouse}
        onTouchEnd={lepasKlikMouse}
      >
        <div
          className="w-full h-full overflow-hidden bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${konten[indeksSaatIni].gambar})` }}
        >
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center relative">
            <div className="max-w-4xl mx-auto flex items-center justify-center">
              <div className="p-4">
                <div className="text-center">
                  <h1 className="font-prefix text-2xl text-white">
                    The carousel slide I made.
                  </h1>
                  <p className="font-description text-xl text-white">
                    Following, Example below.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center bottom-5 absolute">
              {titik}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <IsiCarousel />
      </div>
    </div>
  );
};

export default page;
