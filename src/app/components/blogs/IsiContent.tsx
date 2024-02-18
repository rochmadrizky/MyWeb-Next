"use client";

import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
import React, { useState, useRef } from "react";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragStartX(event.pageX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragStartX === 0 || !sliderRef.current) return;

    const currentX = event.pageX;
    const difference = currentX - dragStartX;

    if (difference > 50 && currentIndex !== slides.length - 1) {
      nextSlide();
      setDragStartX(0);
    } else if (difference < -50 && currentIndex !== 0) {
      prevSlide();
      setDragStartX(0);
    }
  };

  const handleMouseUp = () => {
    setDragStartX(0);
  };

  return (
    <div
      className="md:max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div
        className={`${
          currentIndex === 0 ? "pointer-events-none" : "pointer-events-auto"
        } group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
      >
        <IconPlayerTrackPrev onClick={prevSlide} />
      </div>

      <div
        className={`${
          currentIndex === slides.length - 1
            ? "pointer-events-none"
            : "pointer-events-auto"
        } group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}
      >
        <IconPlayerTrackNext onClick={nextSlide} />
      </div>
    </div>
  );
}

export default App;
