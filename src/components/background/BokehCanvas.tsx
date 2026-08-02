'use client';

import BokehField from './BokehField';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

import { useBackground } from './BackgroundContext';

import type { Group } from 'three';

const MOBILE_QUERY = '(max-width: 767px)';

function subscribeToMobileViewport(onStoreChange: () => void): () => void {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener('change', onStoreChange);
  return () => mediaQuery.removeEventListener('change', onStoreChange);
}

function getMobileViewportSnapshot(): boolean {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getMobileViewportServerSnapshot(): boolean {
  return false;
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  // Mutable targets written by window listeners, read only inside useFrame
  const target = useRef({ x: 0, y: 0, scroll: 0 });
  const pointerEnabled = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const updateEnabled = () => {
      pointerEnabled.current = mq.matches;
    };
    updateEnabled();
    mq.addEventListener('change', updateEnabled);

    const onPointerMove = (event: PointerEvent) => {
      target.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      target.current.scroll = window.scrollY;
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      mq.removeEventListener('change', updateEnabled);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const pointerX = pointerEnabled.current ? target.current.x : 0;
    const pointerY = pointerEnabled.current ? target.current.y : 0;
    g.position.x += (pointerX * 0.5 - g.position.x) * 0.04;
    g.position.y += (-pointerY * 0.35 + target.current.scroll * 0.0004 - g.position.y) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

export default function BokehCanvas() {
  const { webcamActive } = useBackground();
  const [tabHidden, setTabHidden] = useState(false);
  const mobileViewport = useSyncExternalStore(
    subscribeToMobileViewport,
    getMobileViewportSnapshot,
    getMobileViewportServerSnapshot
  );

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const paused = tabHidden || webcamActive;

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power', depth: false }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      frameloop={paused ? 'never' : 'always'}
    >
      <ParallaxRig>
        <BokehField key={mobileViewport ? 'mobile' : 'desktop'} count={mobileViewport ? 40 : 64} />
      </ParallaxRig>
    </Canvas>
  );
}
