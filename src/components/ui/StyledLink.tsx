import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  target?: '_blank' | '_self';
}

export default function StyledLink({ children, href, prefetch = true, target = '_self' }: Props) {
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
