interface Props {
  children: React.ReactNode;
  colorSwap?: boolean;
  colorSwap2?: boolean;
  fit?: boolean;
  onClick?: () => void;
  red?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, colorSwap, colorSwap2, fit, onClick, red, type = 'button' }: Props) {
  if (red) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${fit ? 'w-fit' : 'w-full'} cursor-pointer rounded-lg border-2 border-white bg-red-600 px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:bg-red-800 hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
      >
        {children}
      </button>
    );
  }

  if (colorSwap) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${fit ? 'w-fit' : 'w-full'} bg-dark-cyan hover:bg-desert-sand cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-black hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
      >
        {children}
      </button>
    );
  }

  if (colorSwap2) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${fit ? 'w-fit' : 'w-full'} bg-champagne hover:bg-desert-sand cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-black transition-all duration-200 ease-in-out hover:text-white hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fit ? 'w-fit' : 'w-full'} bg-dark-cyan hover:bg-caribbean-current cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
    >
      {children}
    </button>
  );
}
