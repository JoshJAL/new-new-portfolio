import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
  colorSwap?: boolean;
  colorSwap2?: boolean;
  disabled?: boolean;
  fit?: boolean;
  onClick?: () => void;
  red?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function GlassButton({
  children,
  colorSwap,
  colorSwap2,
  disabled,
  fit,
  onClick,
  red,
  type = 'button'
}: Props) {
  if (red) {
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${fit ? 'w-fit' : 'w-full'} cursor-pointer rounded-xl border border-red-600/20 bg-red-600/50 px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:border-red-800/20 hover:bg-red-800/50 ${roboto.className} pop nice-hover-no-shadow liquid-blur`}
      >
        {children}
      </button>
    );
  }

  if (colorSwap) {
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${fit ? 'w-fit' : 'w-full'} bg-cerulean/50 nice-hover-no-shadow hover:bg-verdigris/50 hover:border-verdigris/20 border-cerulean/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:text-white ${roboto.className} liquid-blur`}
      >
        {children}
      </button>
    );
  }

  if (colorSwap2) {
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${fit ? 'w-fit' : 'w-full'} bg-bittersweet/50 hover:bg-cerulean/50 nice-hover-no-shadow border-bittersweet/20 hover:border-cerulean/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-black transition-all duration-300 ease-in-out hover:text-white ${roboto.className} liquid-blur`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${fit ? 'w-fit' : 'w-full'} bg-verdigris/50 hover:bg-naples-yellow/50 border-verdigris/20 hover:border-naples-yellow/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:text-black ${roboto.className} nice-hover-no-shadow liquid-blur`}
    >
      {children}
    </button>
  );
}
