'use client';

import dynamic from 'next/dynamic';

import { useEffect, useState, useSyncExternalStore } from 'react';

// ssr: false is only legal inside a client component, and three should never run on the server anyway
const BokehCanvas = dynamic(() => import('./BokehCanvas'), { ssr: false });

// Palette mirror of the color tokens in src/app/globals.css (@theme block)
const STATIC_BLOBS = [
  { color: '#247ba0', size: 34, x: 12, y: 18, opacity: 0.5 },
  { color: '#70c1b3', size: 26, x: 78, y: 10, opacity: 0.4 },
  { color: '#368f8b', size: 30, x: 55, y: 62, opacity: 0.45 },
  { color: '#ffe066', size: 20, x: 88, y: 48, opacity: 0.3 },
  { color: '#f25f5c', size: 22, x: 30, y: 80, opacity: 0.28 },
  { color: '#246a73', size: 38, x: 5, y: 55, opacity: 0.5 },
  { color: '#ddbea8', size: 16, x: 68, y: 88, opacity: 0.25 }
];

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(onStoreChange: () => void): () => void {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener('change', onStoreChange);
  return () => mediaQuery.removeEventListener('change', onStoreChange);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

export default function AmbientBackground() {
  const [ready, setReady] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    // Defer mounting three until the browser is idle so it never competes with LCP
    let idleId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (typeof window.requestIdleCallback === 'function') {
      // The timeout guarantees the background still mounts on pages that never go idle
      idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
    } else {
      timeoutId = setTimeout(() => setReady(true), 200);
    }

    return () => {
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div aria-hidden className='pointer-events-none fixed inset-0 z-[-2] overflow-hidden'>
      {reducedMotion ? (
        STATIC_BLOBS.map((blob, i) => (
          <div
            key={i}
            className='absolute rounded-full'
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${blob.size}vmin`,
              height: `${blob.size}vmin`,
              opacity: blob.opacity,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`
            }}
          />
        ))
      ) : ready ? (
        <BokehCanvas />
      ) : null}
    </div>
  );
}
