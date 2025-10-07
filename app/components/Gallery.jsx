"use client"
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    '/images/lava-cake.jpeg',
    '/images/caesar-salad.jpeg',
    '/images/carbonara.jpeg',
    '/images/margherita.jpg',
    '/images/salmon.jpeg',
    '/images/burger.jpeg'
  ]
  return (
    <div className=" max-w-[1240px] mx-auto p-8">
      <h1 className="text-3xl font-extrabold text-cyan-500 mb-8 text-center">
        Our Gallery
      </h1>

      <div
        className="flex gap-4 overflow-x-scroll overflow-y-hidden "
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[70%] sm:w-[45%] md:w-[33%] lg:w-[25%] ">
            <img
              src={src}
              className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;

