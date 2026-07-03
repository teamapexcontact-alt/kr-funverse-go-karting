"use client";

import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { src: "/images/gallery-1.svg", alt: "Go Karting Track", category: "Go Karting" },
  { src: "/images/gallery-2.svg", alt: "Box Cricket Ground", category: "Box Cricket" },
  { src: "/images/gallery-3.svg", alt: "Indoor Games Arena", category: "Indoor Games" },
  { src: "/images/gallery-4.svg", alt: "Birthday Party Setup", category: "Events" },
  { src: "/images/gallery-5.svg", alt: "Corporate Event", category: "Events" },
  { src: "/images/gallery-6.svg", alt: "Go Karting Action", category: "Go Karting" },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (index: number) => setLightboxIndex(index);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            className={`group relative rounded-xl overflow-hidden border border-white/5 cursor-pointer ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => open(index)}
          >
            <div
              className="w-full h-48 md:h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${img.src})` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                {img.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-accent z-10"
            onClick={close}
          >
            <FaTimes />
          </button>

          <button
            className="absolute left-4 text-white text-2xl hover:text-accent z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <FaChevronLeft />
          </button>

          <div
            className="max-w-4xl max-h-[80vh] w-full h-full bg-contain bg-center bg-no-repeat mx-4"
            style={{ backgroundImage: `url(${images[lightboxIndex].src})` }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white text-2xl hover:text-accent z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-8 text-white text-sm">
            {images[lightboxIndex].category} â€” {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
