"use client";

import React, { useEffect, useRef } from "react";

export const OrganicSphereCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    // Mouse tracking with inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotationY = (x / width) * 1.5;
      targetRotationX = -(y / height) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 3D Sphere Points
    const numPoints = 280;
    const radius = Math.min(width, height) * 0.32;
    const points: Array<{ x: number; y: number; z: number; origX: number; origY: number; origZ: number }> = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

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
        origX: x * radius,
        origY: y * radius,
        origZ: z * radius,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      const autoRotateY = time * 0.2 + currentRotationY;
      const autoRotateX = Math.sin(time * 0.1) * 0.2 + currentRotationX;

      const cosY = Math.cos(autoRotateY);
      const sinY = Math.sin(autoRotateY);
      const cosX = Math.cos(autoRotateX);
      const sinX = Math.sin(autoRotateX);

      // Render outer ambient glow halo
      const grad = ctx.createRadialGradient(width / 2, height / 2, radius * 0.2, width / 2, height / 2, radius * 1.4);
      grad.addColorStop(0, "rgba(234, 88, 12, 0.08)");
      grad.addColorStop(0.5, "rgba(16, 185, 129, 0.04)");
      grad.addColorStop(1, "rgba(5, 5, 5, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const projectedPoints: Array<{ px: number; py: number; scale: number; depth: number }> = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // Organic wave displacement
        const wave = Math.sin(time * 2 + i * 0.1) * 8;
        const rx = pt.origX + (pt.origX / radius) * wave;
        const ry = pt.origY + (pt.origY / radius) * wave;
        const rz = pt.origZ + (pt.origZ / radius) * wave;

        // 3D Rotation Matrix (Y then X)
        const x1 = rx * cosY - rz * sinY;
        const z1 = rz * cosY + rx * sinY;

        const y2 = ry * cosX - z1 * sinX;
        const z2 = z1 * cosX + ry * sinX;

        // Perspective Projection
        const fov = 400;
        const scale = fov / (fov + z2 + 100);
        const px = width / 2 + x1 * scale;
        const py = height / 2 + y2 * scale;

        projectedPoints.push({ px, py, scale, depth: z2 });
      }

      // Draw Connection Lines between nearby points
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);

          if (dist < 48) {
            const alpha = (1 - dist / 48) * 0.25 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = p1.depth > 0 ? `rgba(234, 88, 12, ${alpha})` : `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Point Nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const size = Math.max(1, 2.5 * p.scale);
        const opacity = Math.max(0.2, (p.depth + radius) / (radius * 2));

        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fillStyle = p.depth > 0 ? `rgba(234, 88, 12, ${opacity})` : `rgba(16, 185, 129, ${opacity * 0.8})`;
        ctx.fill();
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
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default OrganicSphereCanvas;
