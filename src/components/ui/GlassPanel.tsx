interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tint?: Tint;
}

type Tint = 'cerulean' | 'caribbean' | 'dark-cyan' | 'verdigris' | 'neutral';

// Full literal class strings per tint — Tailwind cannot see interpolated names like `bg-${tint}/30`
const TINT_CLASSES: Record<Tint, string> = {
  cerulean: 'bg-cerulean/30 border-cerulean/20',
  caribbean: 'bg-caribbean-current/30 border-caribbean-current/20',
  'dark-cyan': 'bg-dark-cyan/30 border-dark-cyan/20',
  verdigris: 'bg-verdigris/30 border-verdigris/20',
  neutral: 'bg-davys-gray/30 border-davys-gray/20'
};

export default function GlassPanel({ children, className, id, tint = 'cerulean' }: Props) {
  return (
    <div
      id={id}
      className={`pop glass-edge rounded-2xl border p-4 text-white liquid-blur sm:p-6 ${TINT_CLASSES[tint]} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
