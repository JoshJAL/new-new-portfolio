import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  colorSwap?: boolean;
  href: string;
  prefetch?: boolean;
  target?: '_blank' | '_self';
}

export default function StyledLink({ children, colorSwap, href, prefetch = true, target = '_self' }: Props) {
  if (colorSwap) {
    return (
      <Link
        prefetch={prefetch}
        target={target}
        href={href}
        className='text-caribbean-current w-fit underline-offset-4 hover:underline'
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      prefetch={prefetch}
      target={target}
      href={href}
      className='text-dark-cyan w-fit underline-offset-4 hover:underline'
    >
      {children}
    </Link>
  );
}
