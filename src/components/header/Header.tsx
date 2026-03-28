import DropdownMenu from '@/components/header/dropdownMenu/DropdownMenu';

import { Link } from 'next-view-transitions';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

export default function Header() {
  return (
    <header className='fixed top-0 z-50 w-full p-2'>
      <nav className='bg-verdigris/30 border-verdigris/20 pop glass-edge mx-auto flex w-full max-w-7xl items-center gap-5 rounded-2xl border p-3 liquid-blur'>
        <Link
          prefetch
          href='/'
          className={`text-xl transition-all duration-200 ease-in-out hover:scale-105 md:text-2xl ${roboto.className}`}
        >
          Joshua Levine
        </Link>
        <div className='flex-1' />
        <DropdownMenu />
      </nav>
    </header>
  );
}
