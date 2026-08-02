type ButtonVariant = 'color-swap' | 'color-swap-2' | 'default' | 'red';

const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, { colors: string; hover: string }> = {
  'color-swap': {
    colors: 'border-cerulean/20 bg-cerulean/50',
    hover: 'hover:border-verdigris/20 hover:bg-verdigris/50 hover:text-white'
  },
  'color-swap-2': {
    colors: 'border-bittersweet/20 bg-bittersweet/50',
    hover: 'hover:border-cerulean/20 hover:bg-cerulean/50'
  },
  default: {
    colors: 'border-verdigris/20 bg-verdigris/50',
    hover: 'hover:border-naples-yellow/20 hover:bg-naples-yellow/50 hover:text-black'
  },
  red: {
    colors: 'border-red-600/20 bg-red-600/50',
    hover: 'hover:border-red-800/20 hover:bg-red-800/50'
  }
};

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorSwap?: boolean;
  colorSwap2?: boolean;
  fit?: boolean;
  red?: boolean;
}

export default function GlassButton({
  children,
  className,
  colorSwap,
  colorSwap2,
  fit,
  red,
  type = 'button',
  ...buttonProps
}: GlassButtonProps) {
  const variant: ButtonVariant = red ? 'red' : colorSwap ? 'color-swap' : colorSwap2 ? 'color-swap-2' : 'default';
  const variantClasses = BUTTON_VARIANT_CLASSES[variant];
  const buttonClassName = [
    'pop nice-hover-no-shadow',
    fit ? 'w-fit' : 'w-full',
    'cursor-pointer rounded-xl border',
    variantClasses.colors,
    'px-3 py-2 text-center font-semibold text-white liquid-blur',
    'transition-[background-color,border-color,color,box-shadow,opacity] duration-300 ease-in-out',
    variantClasses.hover,
    'disabled:cursor-not-allowed disabled:opacity-50',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...buttonProps} type={type} className={buttonClassName}>
      {children}
    </button>
  );
}
