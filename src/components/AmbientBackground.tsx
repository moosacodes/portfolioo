"use client";

import { useEffect, useRef } from "react";

type BinaryCluster = {
  x: number;
  y: number;
  text: string;
  startedAt: number;
  duration: number;
};

const fontSize = 10;
const edgePadding = 24;

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = 1;
    let clusters: BinaryCluster[] = [];
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const random = (min: number, max: number) => min + Math.random() * (max - min);

    const createScene = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      clusters = Array.from({ length: Math.max(7, Math.min(13, Math.round(width / 130))) }, () => {
        const side = Math.random() > 0.5;
        const x = side
          ? random(edgePadding, width * 0.14)
          : random(width * 0.86, width - edgePadding);
        const text = Array.from({ length: Math.floor(random(3, 8)) }, () =>
          Math.random() > 0.5 ? "1" : "0",
        ).join("");
        return {
          x,
          y: random(edgePadding, height - edgePadding),
          text,
          startedAt: random(-24000, 0),
          duration: random(6500, 15000),
        };
      });
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      context.textBaseline = "top";

      for (const cluster of clusters) {
        const elapsed = time - cluster.startedAt;
        const cycle = elapsed % cluster.duration;
        const fade = cycle < 1300 ? cycle / 1300 : cycle > cluster.duration - 1800
          ? (cluster.duration - cycle) / 1800
          : 1;
        if (fade <= 0) continue;
        const switchIndex = Math.floor(cycle / 1900) % cluster.text.length;
        const text = cluster.text
          .split("")
          .map((character, index) =>
            index === switchIndex && !reducedMotion
              ? character === "0" ? "1" : "0"
              : character,
          )
          .join("");
        context.fillStyle = `rgba(218, 226, 232, ${Math.min(0.16, fade * 0.13)})`;
        context.fillText(text, cluster.x, cluster.y);
      }

      if (!reducedMotion && !document.hidden) {
        frame = requestAnimationFrame(draw);
      }
    };

    const handleResize = () => {
      createScene();
      draw(performance.now());
    };
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
      } else if (!reducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    };
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      cancelAnimationFrame(frame);
      createScene();
      draw(performance.now());
      if (!reducedMotion && !document.hidden) frame = requestAnimationFrame(draw);
    };

    createScene();
    draw(performance.now());
    if (!reducedMotion) frame = requestAnimationFrame(draw);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-background" aria-hidden="true" />;
}
