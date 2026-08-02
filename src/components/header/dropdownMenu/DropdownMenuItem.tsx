import SiteLink from '@/components/ui/SiteLink';

import { MenuItem } from '@headlessui/react';

interface DropdownMenuItemProps {
  children: React.ReactNode;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export default function DropdownMenuItem({ children, href, target = '_self' }: DropdownMenuItemProps) {
  return (
    <MenuItem>
      <SiteLink
        target={target}
        href={href}
        className='block px-4 py-2 text-sm text-white transition-colors duration-200 ease-in-out hover:bg-verdigris/50 hover:no-underline'
      >
        {children}
      </SiteLink>
    </MenuItem>
  );
}
