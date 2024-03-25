"use client";
import { useState } from "react";

const secretWord = "kopi";

const GuessingGame = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    if (guess.toLowerCase() === secretWord) {
      setMessage("Selamat! Anda benar. Kata yang dicari adalah 'kopi'");
    } else {
      setMessage("Maaf, jawaban Anda salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Game Tebak Kata</h1>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border border-gray-300 px-4 py-2 mb-4"
        placeholder="Tebak kata..."
      />
      <button
        onClick={handleGuess}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tebak
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default GuessingGame;
