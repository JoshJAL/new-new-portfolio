import SiteLink from './SiteLink';

interface Props {
  children: React.ReactNode;
  colorSwap?: boolean;
  href: string;
  target?: '_blank' | '_self';
}

export default function StyledLink({ children, colorSwap, href, target = '_self' }: Props) {
  if (colorSwap) {
    return (
      <SiteLink target={target} href={href} className='gradient_underline w-fit text-naples-yellow'>
        {children}
      </SiteLink>
    );
  }

  return (
    <SiteLink target={target} href={href} className='gradient_underline w-fit text-bittersweet'>
      {children}
    </SiteLink>
  );
}
