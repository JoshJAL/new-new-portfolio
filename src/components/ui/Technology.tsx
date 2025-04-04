import React from 'react';

import type { Tech } from '@/types/tech';

interface Props {
  tech: Tech;
}

export default function Technology({ tech }: Props) {
  const { color, icon, label, textColor } = tech;

  return (
    <p
      className={`flex items-center gap-2 rounded-lg ${color} px-3 py-2 ${textColor ?? 'text-white'} shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
    >
      {icon}
      {label}
    </p>
  );
}
