import { Link } from 'next-view-transitions';

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
      <Link prefetch={prefetch} target={target} href={href} className='text-naples-yellow gradient_underline w-fit'>
        {children}
      </Link>
    );
  }

  return (
    <Link prefetch={prefetch} target={target} href={href} className='text-bittersweet gradient_underline w-fit'>
      {children}
    </Link>
  );
}
