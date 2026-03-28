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

export default function ButtonLink({
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} cursor-pointer rounded-xl border-2 border-white bg-red-600 px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:bg-red-800 nice-hover ${roboto.className}`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-dark-cyan hover:bg-desert-sand cursor-pointer rounded-xl border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-black nice-hover ${roboto.className}`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-cerulean nice-hover hover:bg-verdigris cursor-pointer rounded-xl border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-white ${roboto.className}`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-davys-gray hover:bg-naples-yellow cursor-pointer rounded-xl border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-black ${roboto.className} nice-hover`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-bittersweet hover:bg-cerulean nice-hover cursor-pointer rounded-xl border-2 border-white px-3 py-2 text-center font-semibold text-black transition-all duration-200 ease-in-out hover:text-white ${roboto.className}`}
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
      className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-verdigris hover:bg-naples-yellow cursor-pointer rounded-xl border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-black ${roboto.className} nice-hover`}
    >
      {children}
    </Link>
  );
}
