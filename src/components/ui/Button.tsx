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

export default function Button({
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
        className={`${fit ? 'w-fit' : 'w-full'} cursor-pointer rounded-lg border-2 border-white bg-red-600 px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:bg-red-800 hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] ${roboto.className}`}
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
        className={`${fit ? 'w-fit' : 'w-full'} bg-cerulean nice-hover hover:bg-verdigris hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-white ${roboto.className}`}
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
        className={`${fit ? 'w-fit' : 'w-full'} bg-bittersweet hover:bg-cerulean hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] nice-hover cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-black transition-all duration-200 ease-in-out hover:text-white ${roboto.className}`}
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
      className={`${fit ? 'w-fit' : 'w-full'} bg-verdigris hover:bg-naples-yellow hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-black ${roboto.className} nice-hover`}
    >
      {children}
    </button>
  );
}
