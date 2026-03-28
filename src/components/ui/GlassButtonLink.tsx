import { Link } from 'next-view-transitions';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

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
  prefetch?: boolean;
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
  prefetch = true,
  red,
  scroll,
  target = '_self'
}: Props) {
  if (red) {
    return (
      <Link
        scroll={scroll}
        target={target}
        prefetch={prefetch}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} nice-hover-no-shadow cursor-pointer rounded-xl border border-red-600/20 bg-red-600/50 px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:border-red-800/20 hover:bg-red-800/50 ${roboto.className} pop`}
      >
        {children}
      </Link>
    );
  }

  if (colorSwap) {
    return (
      <Link
        scroll={scroll}
        target={target}
        prefetch={prefetch}
        href={href}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-dark-cyan/50 hover:bg-desert-sand/50 border-dark-cyan/20 hover:border-desert-sand/20 nice-hover-no-shadow cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:text-black ${roboto.className} pop`}
      >
        {children}
      </Link>
    );
  }

  if (colorSwap2) {
    return (
      <Link
        scroll={scroll}
        target={target}
        href={href}
        prefetch={prefetch}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-cerulean/50 nice-hover-no-shadow hover:bg-verdigris/50 border-cerulean/20 hover:border-verdigris/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-white liquid-blur transition-all duration-300 ease-in-out hover:text-white ${roboto.className} pop`}
      >
        {children}
      </Link>
    );
  }

  if (colorSwap3) {
    return (
      <Link
        scroll={scroll}
        target={target}
        href={href}
        prefetch={prefetch}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-davys-gray/50 hover:bg-naples-yellow/50 border-davys-gray/20 hover:border-naples-yellow/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:text-black ${roboto.className} nice-hover-no-shadow`}
      >
        {children}
      </Link>
    );
  }

  if (colorSwap4) {
    return (
      <Link
        scroll={scroll}
        target={target}
        href={href}
        prefetch={prefetch}
        onClick={onClick}
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-bittersweet/50 hover:bg-cerulean/50 nice-hover-no-shadow border-bittersweet/20 hover:border-cerulean/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-black transition-all duration-300 ease-in-out hover:text-white ${roboto.className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      scroll={scroll}
      target={target}
      href={href}
      prefetch={prefetch}
      onClick={onClick}
      className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-verdigris/50 hover:bg-naples-yellow/50 border-verdigris/20 hover:border-naples-yellow/20 pop cursor-pointer rounded-xl border px-3 py-2 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:text-black ${roboto.className} nice-hover-no-shadow`}
    >
      {children}
    </Link>
  );
}
