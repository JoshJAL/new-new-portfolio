import DropdownMenu from './dropdownMenu/DropdownMenu';

import { Link } from 'next-view-transitions';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/packages', label: 'Packages' },
  { href: '/guides', label: 'Guides' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className='fixed top-0 z-50 w-full p-2'>
      <nav className='pop glass-edge mx-auto flex w-full max-w-7xl items-center gap-5 rounded-2xl border border-white/10 bg-dark-purple/40 p-3 text-white liquid-blur'>
        <Link
          prefetch
          href='/'
          className='font-display text-xl transition-transform duration-200 ease-in-out hover:scale-105 md:text-2xl'
        >
          Joshua Levine
        </Link>
        <div className='flex-1' />
        <div className='hidden items-center gap-6 md:flex'>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} prefetch href={link.href} className='gradient_underline pb-0.5 text-sm font-medium'>
              {link.label}
            </Link>
          ))}
        </div>
        <div className='md:hidden'>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
}
