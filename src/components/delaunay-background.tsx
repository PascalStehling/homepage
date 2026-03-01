"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Delaunator from "delaunator";
import { LuPause, LuPlay } from "react-icons/lu";

const POINT_COUNT = 60;
const SPEED = 0.3;
const MAX_SPEED = 1.5;
const STORAGE_KEY = "delaunay-animation-enabled";
const THEME_KEY = "delaunay-color-theme";

type Point = { x: number; y: number; vx: number; vy: number };
type ColorSet = { center: string; edge: string };
type Theme = { label: string; swatch: string; dark: ColorSet; light: ColorSet };

const THEMES: Theme[] = [
  {
    label: "Teal",
    swatch: "#1a4558",
    dark:  { center: "#1a4558", edge: "#070f18" },
    light: { center: "#8ac4d0", edge: "#f0f7f9" },
  },
  {
    label: "Orange",
    swatch: "#6b3510",
    dark:  { center: "#6b3510", edge: "#0f0a06" },
    light: { center: "#d8965a", edge: "#faf3ea" },
  },
  {
    label: "Forest",
    swatch: "#1a4030",
    dark:  { center: "#1a4030", edge: "#0a1a12" },
    light: { center: "#7ab090", edge: "#f0f5f0" },
  },
  {
    label: "Rose",
    swatch: "#5a1a2a",
    dark:  { center: "#5a1a2a", edge: "#0f0608" },
    light: { center: "#d890a0", edge: "#f9f0f2" },
  },
  {
    label: "Purple",
    swatch: "#3a1a5a",
    dark:  { center: "#3a1a5a", edge: "#0a0610" },
    light: { center: "#a878c8", edge: "#f5f0f8" },
  },
];

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function lerpColor(a: string, b: string, t: number): string {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bl})`;
}

function makePoints(w: number, h: number): Point[] {
  return Array.from({ length: POINT_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED * 2,
    vy: (Math.random() - 0.5) * SPEED * 2,
  }));
}

export function DelaunayBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const rafRef = useRef<number>(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const pausedRef = useRef(false);
  const isDarkRef = useRef(
    typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );
  const themeIndexRef = useRef(0);

  const { resolvedTheme } = useTheme();
  useEffect(() => {
    isDarkRef.current = resolvedTheme === "dark";
  }, [resolvedTheme]);

  const [enabled, setEnabled] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(1);

  // Read persisted preferences after mount to avoid SSR/client mismatch
  useEffect(() => {
    const storedEnabled = localStorage.getItem(STORAGE_KEY);
    if (storedEnabled !== null) setEnabled(storedEnabled === "true");
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme !== null) {
      const idx = parseInt(storedTheme, 10);
      if (!isNaN(idx) && idx >= 0 && idx < THEMES.length) setSelectedTheme(idx);
    }
  }, []);

  // Keep ref in sync so drawFrame can read it without stale closure
  useEffect(() => {
    themeIndexRef.current = selectedTheme;
  }, [selectedTheme]);

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const drawFrame = useCallback((animate: boolean) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const points = pointsRef.current;
    if (points.length === 0) return;

    const isDark = isDarkRef.current;
    const theme = THEMES[themeIndexRef.current];
    const colors = isDark ? theme.dark : theme.light;

    if (animate) {
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy); }
      }

      for (const p of points) {
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }
      }
    }

    const del = Delaunator.from(points, (p) => p.x, (p) => p.y);
    ctx.clearRect(0, 0, w, h);

    // Draw edges
    for (let i = 0; i < del.triangles.length; i += 3) {
      const a = del.triangles[i];
      const b = del.triangles[i + 1];
      const c = del.triangles[i + 2];
      const cx = (points[a].x + points[b].x + points[c].x) / 3;
      const cy = (points[a].y + points[b].y + points[c].y) / 3;
      const dx = (cx - w / 2) / (w / 2);
      const dy = (cy - h / 2) / (h / 2);
      const t = Math.min(1, Math.sqrt(dx * dx + dy * dy) / Math.SQRT2);
      ctx.strokeStyle = lerpColor(colors.center, colors.edge, t);
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.moveTo(points[a].x, points[a].y);
      ctx.lineTo(points[b].x, points[b].y);
      ctx.lineTo(points[c].x, points[c].y);
      ctx.closePath();
      ctx.stroke();
    }

    // Draw vertices
    for (const p of points) {
      const dx = (p.x - w / 2) / (w / 2);
      const dy = (p.y - h / 2) / (h / 2);
      const t = Math.min(1, Math.sqrt(dx * dx + dy * dy) / Math.SQRT2);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = lerpColor(colors.center, colors.edge, t);
      ctx.fill();
    }
  }, []);

  const loop = useCallback(() => {
    if (pausedRef.current) return;
    drawFrame(true);
    rafRef.current = requestAnimationFrame(loop);
  }, [drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctxRef.current = canvas.getContext("2d");
      pointsRef.current = makePoints(canvas.width, canvas.height);
      drawFrame(false);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  useEffect(() => {
    const shouldAnimate = enabled && !reducedMotion;
    pausedRef.current = !shouldAnimate;
    cancelAnimationFrame(rafRef.current);
    if (shouldAnimate) {
      rafRef.current = requestAnimationFrame(loop);
    } else {
      drawFrame(false);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [enabled, reducedMotion, loop, drawFrame]);

  useEffect(() => {
    if (pausedRef.current) drawFrame(false);
  }, [resolvedTheme, drawFrame]);

  // Redraw immediately when theme changes
  useEffect(() => {
    drawFrame(false);
  }, [selectedTheme, drawFrame]);


  const toggle = () => {
    setEnabled(prev => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  const pickTheme = (idx: number) => {
    setSelectedTheme(idx);
    localStorage.setItem(THEME_KEY, String(idx));
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 opacity-30">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="fixed bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-lg bg-background/60 backdrop-blur-sm border border-border px-2 py-1.5">
        {THEMES.map((theme, idx) => (
          <button
            key={theme.label}
            onClick={() => pickTheme(idx)}
            title={theme.label}
            aria-label={`Color theme: ${theme.label}`}
            className="w-3.5 h-3.5 rounded-full transition-transform hover:scale-125"
            style={{
              backgroundColor: theme.swatch,
              outline: selectedTheme === idx ? `2px solid ${theme.swatch}` : "none",
              outlineOffset: "2px",
            }}
          />
        ))}
        <div className="w-px h-4 bg-border mx-0.5" />
        <button
          onClick={toggle}
          className="p-0.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={enabled ? "Pause background animation" : "Play background animation"}
          title={enabled ? "Pause animation" : "Play animation"}
        >
          {enabled && !reducedMotion ? (
            <LuPause className="h-3.5 w-3.5" />
          ) : (
            <LuPlay className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </>
  );
}
