'use client';

import * as THREE from 'three';

import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

// Palette mirror of the color tokens in src/app/globals.css (@theme block),
// weighted ~2:1 cool:warm so warm discs read as accent highlights
const DISC_COLORS = [
  '#247ba0', // cerulean
  '#246a73', // caribbean-current
  '#368f8b', // dark-cyan
  '#70c1b3', // verdigris
  '#247ba0', // cerulean again for weighting
  '#368f8b', // dark-cyan again for weighting
  '#ffe066', // naples-yellow
  '#f25f5c', // bittersweet
  '#ddbea8' // desert-sand
];

interface Disc {
  x: number;
  y: number;
  z: number;
  depth: number;
  scale: number;
  ampX: number;
  ampY: number;
  speedX: number;
  speedY: number;
  phaseX: number;
  phaseY: number;
  pulseSpeed: number;
}

// Runtime-generated soft defocused disc, so no image assets and no drei
function makeDiscTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.65)');
  gradient.addColorStop(0.85, 'rgba(255, 255, 255, 0.12)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function createSeededRandom(seed: number): () => number {
  let state = seed;

  return () => {
    state += 0x6d2b79f5;
    let result = state;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function createFieldData(count: number): { colors: THREE.Color[]; discs: Disc[] } {
  const discs: Disc[] = [];
  const colors: THREE.Color[] = [];
  const random = createSeededRandom(count);

  for (let index = 0; index < count; index += 1) {
    const z = -10 + random() * 8;
    // Depth 0 = farthest (z −10), 1 = nearest (z −2): far discs are big dim washes, near ones small and bright
    const depth = (z + 10) / 8;
    discs.push({
      x: (random() * 2 - 1) * 14,
      y: (random() * 2 - 1) * 8,
      z,
      depth,
      scale: (2.6 - depth * 1.8) * (0.7 + random() * 0.6),
      ampX: 0.5 + random() * 1.2,
      ampY: 0.4 + random() * 1,
      speedX: 0.02 + random() * 0.06,
      speedY: 0.02 + random() * 0.06,
      phaseX: random() * Math.PI * 2,
      phaseY: random() * Math.PI * 2,
      pulseSpeed: 0.05 + random() * 0.1
    });
    const color = new THREE.Color(DISC_COLORS[Math.floor(random() * DISC_COLORS.length)]);
    color.multiplyScalar(0.3 + depth * 0.55);
    colors.push(color);
  }

  return { colors, discs };
}

interface BokehFieldProps {
  count: number;
  surgeToken: number;
  tint: string | null;
}

export default function BokehField({ count, surgeToken, tint }: BokehFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  // Accumulated via useFrame's delta because THREE.Clock is deprecated
  const elapsedRef = useRef(0);
  const surgeRef = useRef(0);
  const colorsSettledRef = useRef(true);
  const [dummy] = useState(() => new THREE.Object3D());
  const [texture] = useState(makeDiscTexture);
  const [{ colors, discs }] = useState(() => createFieldData(count));
  const [currentColors] = useState(() => colors.map((c) => c.clone()));
  const [targetColors] = useState(() => colors.map((c) => c.clone()));

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    for (let i = 0; i < colors.length; i++) {
      mesh.setColorAt(i, colors[i]);
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [colors]);

  useEffect(() => {
    const tintColor = tint ? new THREE.Color(tint) : null;
    for (let i = 0; i < colors.length; i++) {
      targetColors[i].copy(colors[i]);
      // Shift ~60% of discs; nearer discs (higher depth) take more tint so the wash reads in front
      if (tintColor && i % 5 < 3) {
        // Base colors are already depth-dimmed, so lerp toward an equally dimmed tint
        // to keep brightness flat — additive blending blooms if it rises
        const dimmedTint = tintColor.clone().multiplyScalar(0.3 + discs[i].depth * 0.55);
        targetColors[i].lerp(dimmedTint, 0.3 + discs[i].depth * 0.3);
      }
    }
    colorsSettledRef.current = false;
  }, [tint, colors, discs, targetColors]);

  useEffect(() => {
    if (surgeToken > 0) surgeRef.current = 1;
  }, [surgeToken]);

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const clampedDelta = Math.min(delta, 0.1);
    // Navigation surge: field-wide drift/pulse boost with ~1s exponential decay
    surgeRef.current *= Math.exp(-clampedDelta * 4);
    const surge = surgeRef.current < 0.01 ? 0 : surgeRef.current;
    elapsedRef.current += clampedDelta * (1 + surge * 5);
    const pulseAmp = 0.08 * (1 + surge * 1.5);
    const t = elapsedRef.current;
    for (let i = 0; i < discs.length; i++) {
      const d = discs[i];
      dummy.position.set(
        d.x + Math.sin(t * d.speedX + d.phaseX) * d.ampX,
        d.y + Math.cos(t * d.speedY + d.phaseY) * d.ampY,
        d.z
      );
      dummy.scale.setScalar(d.scale * (1 + Math.sin(t * d.pulseSpeed + d.phaseX) * pulseAmp));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;

    if (!colorsSettledRef.current) {
      const alpha = 1 - Math.exp(-clampedDelta * 2.5);
      let maxDeltaSq = 0;
      for (let i = 0; i < currentColors.length; i++) {
        currentColors[i].lerp(targetColors[i], alpha);
        const dr = currentColors[i].r - targetColors[i].r;
        const dg = currentColors[i].g - targetColors[i].g;
        const db = currentColors[i].b - targetColors[i].b;
        maxDeltaSq = Math.max(maxDeltaSq, dr * dr + dg * dg + db * db);
        mesh.setColorAt(i, currentColors[i]);
      }
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      if (maxDeltaSq < 1e-6) colorsSettledRef.current = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, discs.length]} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </instancedMesh>
  );
}
