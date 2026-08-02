import SiteLink from './SiteLink';

import type { SiteLinkProps } from './SiteLink';

type LinkVariant = 'color-swap' | 'color-swap-2' | 'color-swap-3' | 'color-swap-4' | 'default' | 'red';

const LINK_VARIANT_CLASSES: Record<LinkVariant, { blurred: boolean; colors: string; hover: string }> = {
  'color-swap': {
    blurred: true,
    colors: 'border-dark-cyan/20 bg-dark-cyan/50',
    hover: 'hover:border-desert-sand/20 hover:bg-desert-sand/50 hover:text-black'
  },
  'color-swap-2': {
    blurred: true,
    colors: 'border-cerulean/20 bg-cerulean/50',
    hover: 'hover:border-verdigris/20 hover:bg-verdigris/50 hover:text-white'
  },
  'color-swap-3': {
    blurred: false,
    colors: 'border-davys-gray/20 bg-davys-gray/50',
    hover: 'hover:border-naples-yellow/20 hover:bg-naples-yellow/50 hover:text-black'
  },
  'color-swap-4': {
    blurred: true,
    colors: 'border-bittersweet/20 bg-bittersweet/50',
    hover: 'hover:border-cerulean/20 hover:bg-cerulean/50'
  },
  default: {
    blurred: false,
    colors: 'border-verdigris/20 bg-verdigris/50',
    hover: 'hover:border-naples-yellow/20 hover:bg-naples-yellow/50 hover:text-black'
  },
  red: {
    blurred: true,
    colors: 'border-red-600/20 bg-red-600/50',
    hover: 'hover:border-red-800/20 hover:bg-red-800/50'
  }
};

export interface GlassButtonLinkProps extends SiteLinkProps {
  additionalClasses?: string;
  colorSwap?: boolean;
  colorSwap2?: boolean;
  colorSwap3?: boolean;
  colorSwap4?: boolean;
  fit?: boolean;
  red?: boolean;
}

export default function GlassButtonLink({
  additionalClasses,
  children,
  className,
  colorSwap,
  colorSwap2,
  colorSwap3,
  colorSwap4,
  fit,
  red,
  ...linkProps
}: GlassButtonLinkProps) {
  const variant: LinkVariant = red
    ? 'red'
    : colorSwap
      ? 'color-swap'
      : colorSwap2
        ? 'color-swap-2'
        : colorSwap3
          ? 'color-swap-3'
          : colorSwap4
            ? 'color-swap-4'
            : 'default';
  const variantClasses = LINK_VARIANT_CLASSES[variant];
  const linkClassName = [
    'pop nice-hover-no-shadow',
    fit ? 'w-fit' : 'w-full',
    'cursor-pointer rounded-xl border',
    variantClasses.colors,
    'px-3 py-2 text-center font-semibold text-white',
    variantClasses.blurred ? 'liquid-blur' : undefined,
    'transition-[background-color,border-color,color,box-shadow] duration-300 ease-in-out',
    variantClasses.hover,
    additionalClasses,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <SiteLink {...linkProps} className={linkClassName}>
      {children}
    </SiteLink>
  );
}
