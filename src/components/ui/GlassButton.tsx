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
        className={`${fit ? 'w-fit' : 'w-full'} pop nice-hover-no-shadow cursor-pointer rounded-xl border border-red-600/20 bg-red-600/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-red-800/20 hover:bg-red-800/50`}
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
        className={`${fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow pop cursor-pointer rounded-xl border border-cerulean/20 bg-cerulean/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-verdigris/20 hover:bg-verdigris/50 hover:text-white`}
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
        className={`${fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow pop cursor-pointer rounded-xl border border-bittersweet/20 bg-bittersweet/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-cerulean/20 hover:bg-cerulean/50`}
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
      className={`${fit ? 'w-fit' : 'w-full'} pop nice-hover-no-shadow cursor-pointer rounded-xl border border-verdigris/20 bg-verdigris/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-naples-yellow/20 hover:bg-naples-yellow/50 hover:text-black`}
    >
      {children}
    </button>
  );
}
