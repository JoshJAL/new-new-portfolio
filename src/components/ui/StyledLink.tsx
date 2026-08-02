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
      <Link prefetch={prefetch} target={target} href={href} className='gradient_underline w-fit text-naples-yellow'>
        {children}
      </Link>
    );
  }

  return (
    <Link prefetch={prefetch} target={target} href={href} className='gradient_underline w-fit text-bittersweet'>
      {children}
    </Link>
  );
}
