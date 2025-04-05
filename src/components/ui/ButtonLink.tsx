import { Link } from 'next-view-transitions';

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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} cursor-pointer rounded-lg border-2 border-white bg-red-600 px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:bg-red-800 hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-dark-cyan hover:bg-desert-sand cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:text-black hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-champagne hover:bg-desert-sand cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-black transition-all duration-200 ease-in-out hover:text-white hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-dark-purple hover:bg-caribbean-current cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
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
        className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-champagne hover:bg-dark-purple cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-black transition-all duration-200 ease-in-out hover:text-white hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
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
      className={`${additionalClasses ? additionalClasses : fit ? 'w-fit' : 'w-full'} bg-dark-cyan hover:bg-caribbean-current cursor-pointer rounded-lg border-2 border-white px-3 py-2 text-center font-semibold text-white transition-all duration-200 ease-in-out hover:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
    >
      {children}
    </Link>
  );
}
