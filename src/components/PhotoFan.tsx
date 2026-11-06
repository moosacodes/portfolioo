"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/moosa-self1.png", rotate: "1.5deg" },
  { src: "/moosa-self5.jpg", rotate: "-2deg" },
  { src: "/moosa-self4.jpg", rotate: "1deg" },
  { src: "/moosa-self3.jpg", rotate: "-1.5deg" },
  { src: "/moosa-self2.jpg", rotate: "1deg" },
] as const;

export function PhotoFan() {
  const [activePhoto, setActivePhoto] = useState<(typeof photos)[number] | null>(null);

  useEffect(() => {
    if (!activePhoto) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  return (
    <>
      <div className="flex justify-center items-center mt-4 md:mt-8 overflow-hidden w-full sm:overflow-visible">
        {photos.map((photo) => (
        <div
          key={photo.src}
          className="group relative -mx-4 mt-4 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#11161d] p-1 transition-all duration-200 ease-out hover:z-20 hover:-translate-y-2 hover:border-[#79cfc5]/60 focus-visible:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#79cfc5]"
          style={{
            rotate: photo.rotate,
          }}
          tabIndex={0}
          role="button"
          aria-label="Open photo"
          onClick={() => setActivePhoto(photo)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setActivePhoto(photo);
            }
          }}
        >
          <Image
            src={photo.src}
            alt="Moosa Alam"
            width={800}
            height={800}
            className="h-32 w-28 rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.03] sm:h-40 sm:w-32 md:h-52 md:w-40 lg:h-64 lg:w-52"
          />
        </div>
        ))}
      </div>

      {activePhoto ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070a]/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photo"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl rounded-xl border border-white/15 bg-[#11161d] p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt="Moosa Alam"
              width={1200}
              height={1200}
              className="max-h-[calc(90vh-1rem)] w-auto max-w-full rounded-lg object-contain"
            />
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-sm text-white transition-colors hover:border-[#79cfc5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#79cfc5]"
              onClick={() => setActivePhoto(null)}
              aria-label="Close expanded photo"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
