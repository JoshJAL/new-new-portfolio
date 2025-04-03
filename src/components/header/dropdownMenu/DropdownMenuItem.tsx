'use client';

import Link from 'next/link';

import { MenuItem } from '@headlessui/react';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export default function DropdownMenuItem({ children, href, prefetch = true, target = '_self' }: DropdownMenuItemProps) {
  return (
    <MenuItem>
      <Link
        prefetch={prefetch}
        target={target}
        href={href}
        className='hover:bg-dark-cyan block px-4 py-2 text-sm text-white transition-all duration-200 ease-in-out hover:no-underline'
      >
        {children}
      </Link>
    </MenuItem>
  );
}
