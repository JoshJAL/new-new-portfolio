'use client';

import { useCallback, useEffect, useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  scale?: number;
  perspective?: number;
  glareOpacity?: number;
}

export default function TiltCard({
  children,
  className = '',
  tiltMax = 10,
  scale = 1.03,
  perspective = 1000,
  glareOpacity = 0.2
}: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion.current) return;
      const container = containerRef.current;
      const inner = innerRef.current;
      const glare = glareRef.current;
      if (!container || !inner) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateX = (0.5 - y) * tiltMax * 2;
        const rotateY = (x - 0.5) * tiltMax * 2;

        inner.style.transition = 'transform 150ms ease-out';
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

        if (glare) {
          const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI) + 90;
          glare.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${glareOpacity}) 0%, transparent 80%)`;
          glare.style.opacity = '1';
        }
      });
    },
    [tiltMax, scale, glareOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const inner = innerRef.current;
    const glare = glareRef.current;
    if (inner) {
      inner.style.transition = 'transform 600ms cubic-bezier(0.03, 0.98, 0.52, 0.99)';
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    if (glare) {
      glare.style.transition = 'opacity 600ms ease-out';
      glare.style.opacity = '0';
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={innerRef}
        className='relative'
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        {children}
        <div
          ref={glareRef}
          className='pointer-events-none absolute inset-0 z-50 rounded-2xl'
          style={{
            opacity: 0,
            mixBlendMode: 'soft-light'
          }}
        />
      </div>
    </div>
  );
}
