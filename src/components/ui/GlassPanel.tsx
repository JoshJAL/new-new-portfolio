interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tint?: Tint;
}

type Tint = 'cerulean' | 'caribbean' | 'dark-cyan' | 'verdigris' | 'neutral';

// Full literal class strings per tint — Tailwind cannot see interpolated names like `bg-${tint}/30`
const TINT_CLASSES: Record<Tint, string> = {
  cerulean: 'border-cerulean/20 bg-cerulean/30',
  caribbean: 'border-caribbean-current/20 bg-caribbean-current/30',
  'dark-cyan': 'border-dark-cyan/20 bg-dark-cyan/30',
  verdigris: 'border-verdigris/20 bg-verdigris/30',
  neutral: 'border-davys-gray/20 bg-davys-gray/30'
};

export default function GlassPanel({ children, className, id, tint = 'cerulean' }: Props) {
  return (
    <div
      id={id}
      className={`pop glass-edge rounded-2xl border ${TINT_CLASSES[tint]} p-4 text-white liquid-blur sm:p-6 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
