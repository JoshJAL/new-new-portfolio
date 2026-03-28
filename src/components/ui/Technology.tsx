import React from 'react';

import type { Tech } from '@/types/tech';

interface Props {
  tech: Tech;
}

export default function Technology({ tech }: Props) {
  const { borderColor, color, icon, label, textColor } = tech;

  return (
    <p
      className={`flex items-center gap-2 rounded-xl ${color} px-3 py-2 ${textColor ?? 'text-white'} border ${borderColor} pop liquid-blur`}
    >
      {icon}
      {label}
    </p>
  );
}
