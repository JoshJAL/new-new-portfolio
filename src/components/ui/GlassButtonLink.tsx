import SiteLink from './SiteLink';

interface Props {
  additionalClasses?: string;
  children: React.ReactNode;
  colorSwap?: boolean;
  colorSwap2?: boolean;
  colorSwap3?: boolean;
  colorSwap4?: boolean;
  fit?: boolean;
  href: string;
  onClick?: () => void;
  red?: boolean;
  scroll?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export default function GlassButtonLink({
  additionalClasses,
  children,
  colorSwap,
  colorSwap2,
  colorSwap3,
  colorSwap4,
  fit,
  href,
  onClick,
  red,
  scroll,
  target = '_self'
}: Props) {
  if (red) {
    return (
      <SiteLink
        scroll={scroll}
        target={target}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow pop cursor-pointer rounded-xl border border-red-600/20 bg-red-600/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-red-800/20 hover:bg-red-800/50`}
      >
        {children}
      </SiteLink>
    );
  }

  if (colorSwap) {
    return (
      <SiteLink
        scroll={scroll}
        target={target}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow pop cursor-pointer rounded-xl border border-dark-cyan/20 bg-dark-cyan/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-desert-sand/20 hover:bg-desert-sand/50 hover:text-black`}
      >
        {children}
      </SiteLink>
    );
  }

  if (colorSwap2) {
    return (
      <SiteLink
        scroll={scroll}
        target={target}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow pop pop cursor-pointer rounded-xl border border-cerulean/20 bg-cerulean/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-verdigris/20 hover:bg-verdigris/50 hover:text-white`}
      >
        {children}
      </SiteLink>
    );
  }

  if (colorSwap3) {
    return (
      <SiteLink
        scroll={scroll}
        target={target}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} pop nice-hover-no-shadow cursor-pointer rounded-xl border border-davys-gray/20 bg-davys-gray/50 px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:border-naples-yellow/20 hover:bg-naples-yellow/50 hover:text-black`}
      >
        {children}
      </SiteLink>
    );
  }

  if (colorSwap4) {
    return (
      <SiteLink
        scroll={scroll}
        target={target}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow pop cursor-pointer rounded-xl border border-bittersweet/20 bg-bittersweet/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-cerulean/20 hover:bg-cerulean/50`}
      >
        {children}
      </SiteLink>
    );
  }

  return (
    <SiteLink
      scroll={scroll}
      target={target}
      href={href}
      onClick={onClick}
      className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} pop nice-hover-no-shadow cursor-pointer rounded-xl border border-verdigris/20 bg-verdigris/50 px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:border-naples-yellow/20 hover:bg-naples-yellow/50 hover:text-black`}
    >
      {children}
    </SiteLink>
  );
}
