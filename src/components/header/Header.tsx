import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 w-full p-2'>
      <nav className='bg-champagne/60 mx-auto flex w-full max-w-7xl items-center gap-5 rounded-tl-lg rounded-br-lg border-2 border-white p-3 shadow-[3px_3px_0px_rgba(255,255,255,1)] backdrop-blur-md'>
        <Link prefetch href='/' className='text-xl transition-all duration-200 ease-in-out hover:scale-105 md:text-2xl'>
          Joshua Levine
        </Link>
        <div className='flex-1' />
      </nav>
    </header>
  );
}
