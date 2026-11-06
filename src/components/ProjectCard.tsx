"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ProjectCardProps = {
  name: string;
  role: string;
  year: string;
  description: string;
  image?: string;
  video?: string;
};

export function ProjectCard({
  name,
  role,
  year,
  description,
  image,
  video,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      void videoRef.current.play().catch(() => {});
    }
  };

  const onLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: y * -2.5, y: x * 2.5 });
  };

  return (
    <div
      className="relative block h-full w-full rise-in"
      onPointerMove={onMove}
    >
      <div
        className="group relative z-20 h-full w-full transition-transform duration-300 ease-out"
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
          className="relative block aspect-video w-full overflow-hidden rounded-md"
        >
          {video ? (
            <video
              ref={videoRef}
              poster={image}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full rounded-md object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
            >
              <source src={video} type={video.endsWith(".mov") ? "video/quicktime" : "video/mp4"} />
            </video>
          ) : null}
          {image ? (
            <Image
              alt={`${name} preview`}
              src={image}
              fill
              sizes="(max-width: 1024px) 100vw, 512px"
              className={`rounded-md object-cover transition-all duration-[250ms] ease-out ${
                video
                  ? hovered
                    ? "opacity-0"
                    : "opacity-100"
                  : "transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
              } ${video ? "pointer-events-none" : ""}`}
            />
          ) : (
            <div className="absolute inset-0 flex items-end overflow-hidden rounded-md bg-[radial-gradient(circle_at_75%_25%,rgba(121,207,197,0.16),transparent_35%),linear-gradient(135deg,#171c23,#090c10)] p-5 transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]">
              <span className="font-mono text-5xl tracking-[-0.08em] text-white/15">
                {name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div className="pt-3 pb-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h4 className="text-base font-semibold leading-5 tracking-[-0.01em] text-neutral-100">
              {name}
            </h4>
            <span className="inline-flex items-center text-sm font-normal leading-5 tracking-wide text-lighttext2">
              - {role}
            </span>
            <span className="ml-auto text-xs font-normal leading-5 tracking-wide text-lighttext2">
              {year}
            </span>
          </div>
          <p className="mt-1 text-[13px] leading-5 tracking-wide text-lighttext2">{description}</p>
        </div>
      </div>
    </div>
  );
}
