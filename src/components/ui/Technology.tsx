import type { Tech } from '@/types/tech';

interface Props {
  tech: Tech;
}

export default function Technology({ tech }: Props) {
  const { borderColor, color, icon, label, textColor } = tech;

  return (
    <p
      className={`flex items-center gap-2 rounded-full ${color} px-2.5 py-1 text-sm ${textColor ?? 'text-white'} border ${borderColor} liquid-blur`}
    >
      {icon}
      {label}
    </p>
  );
}
