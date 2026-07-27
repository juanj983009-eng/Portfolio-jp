"use client";

import React, { useEffect, useRef } from "react";

export const ParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotY = (x / width) * 1.8;
      targetRotX = -(y / height) * 1.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const numPoints = 320;
    const radius = Math.min(width, height) * 0.35;
    const points: Array<{ x: number; y: number; z: number; color: string }> = [];

    const colors = ["#06b6d4", "#ea580c", "#10b981", "#38bdf8"];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        color: colors[i % colors.length],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      const rotY = time * 0.18 + currentRotY;
      const rotX = Math.sin(time * 0.1) * 0.15 + currentRotX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected: Array<{ px: number; py: number; scale: number; depth: number; color: string }> = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.z * cosY + pt.x * sinY;

        const y2 = pt.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + pt.y * sinX;

        const fov = 380;
        const scale = fov / (fov + z2 + 80);
        const px = width / 2 + x1 * scale;
        const py = height / 2 + y2 * scale;

        projected.push({ px, py, scale, depth: z2, color: pt.color });
      }

      // Draw Connection Constellation Lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j += 4) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);

          if (dist < 42) {
            const alpha = (1 - dist / 42) * 0.2 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw Luminescent Particle Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const size = Math.max(1, 2.2 * p.scale);
        const alpha = Math.max(0.15, (p.depth + radius) / (radius * 2));

        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ParticleSphere;
