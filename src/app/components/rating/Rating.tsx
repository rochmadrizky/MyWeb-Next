import React, { useState } from "react";
import { IconStar } from "@tabler/icons-react";
import InputRating from "./InputRating";

interface RatingProps {
  initialNilai?: number;
  maksimalNilai?: number;
}

const Rating: React.FC<RatingProps> = ({
  initialNilai = 0,
  maksimalNilai = 5,
}) => {
  const [nilai, mengaturNilai] = useState(initialNilai);
  const [pesan, mengaturPesan] = useState(
    "The value expression will appear here."
  );
  const [nama, mengaturNama] = useState("");
  const [deskripsi, mengaturDeskripsi] = useState("");
  const [ratingTerkirim, mengaturRatingTerkirim] = useState(false);

  const klikMenilai = (klik: number) => {
    mengaturNilai(klik + 1);
    switch (klik + 1) {
      case 1:
        mengaturPesan("Disappointed");
        break;
      case 2:
        mengaturPesan("Not Satisfied");
        break;
      case 3:
        mengaturPesan("Quite Satisfied");
        break;
      case 4:
        mengaturPesan("Satisfied");
        break;
      case 5:
        mengaturPesan("Very satisfied");
        break;
      default:
        mengaturPesan("");
    }
  };

  const mengirimRating = () => {
    mengaturRatingTerkirim(true);
  };

  const resetForm = () => {
    mengaturNilai(initialNilai);
    mengaturNama("");
    mengaturDeskripsi("");
    mengaturRatingTerkirim(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        {!ratingTerkirim && (
          <div className="max-w-lg p-4 border-l-2 border-r-2 border-blue-500 rounded-3xl">
            <div className="flex flex-col items-center justify-center">
              <InputRating
                nilai={nama}
                isi={(hasil) => mengaturNama(hasil)}
                pengganti="Nama"
                jenis="text"
              />

              <InputRating
                nilai={deskripsi}
                isi={(hasil) => mengaturDeskripsi(hasil)}
                pengganti="Deskripsi"
                jenis="textarea"
              />

              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2 items-center justify-center">
                  {[...Array(maksimalNilai)].map((_, index) => (
                    <div
                      key={index}
                      onClick={() => klikMenilai(index)}
                      className={`${
                        index < nilai ? "text-blue-500" : "text-gray-300"
                      } cursor-pointer`}
                    >
                      <IconStar className="w-8 h-8" />
                    </div>
                  ))}
                </div>

                <div className="p-2">
                  <p className="font-description">{pesan}</p>
                </div>
              </div>

              <div className="p-4">
                <button
                  disabled={
                    nama.trim() === "" || deskripsi.trim() === "" || nilai === 0
                  }
                  onClick={mengirimRating}
                  className="px-6 py-2 rounded-lg border-b-2 border-t-2 border-blue-500 font-prefix"
                >
                  Submit Rating
                </button>
              </div>
            </div>
          </div>
        )}

        {ratingTerkirim && (
          <div className="flex items-center justify-center">
            <div className="border-l-2 border-r-2 border-blue-500 rounded-3xl">
              <div className="p-4 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="flex items-center justify-center gap-2">
                    {[...Array(maksimalNilai)].map((_, index) => (
                      <div key={index}>
                        {index < nilai ? (
                          <IconStar className="text-blue-500 w-8 h-8" />
                        ) : (
                          <IconStar className="text-gray-300 w-8 h-8" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="p-1">
                    <p className="font-description">{pesan}</p>
                  </div>
                </div>

                <div className="p-2">
                  <h1 className="font-title text-xl md:text-2xl">{nama}</h1>

                  <div className="w-64 h-full p-2">
                    <p
                      style={{ overflowWrap: "break-word" }}
                      className="font-description text-lg"
                    >
                      {deskripsi}
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2 rounded-lg border-b-2 border-t-2 border-blue-500 mt-4 font-prefix"
                >
                  Reset Form
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <div className="p-8">
          <h1 className="font-prefix text-2xl">Notes:</h1>
          <p className="font-description">
            I made a simple rating, You can click the submit button
          </p>
          <p className="font-description">
            after you have filled out all the forms listed above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
