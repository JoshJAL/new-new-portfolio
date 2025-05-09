import DropdownMenuItem from '@/components/header/dropdownMenu/DropdownMenuItem';

import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

export default function DropdownMenu() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <MenuButton
          className={
            'bg-cerulean hover:bg-naples-yellow nice-hover inline-flex cursor-pointer justify-center rounded-lg border-2 border-white p-2 text-sm font-medium text-white shadow-xs transition-all hover:text-black focus:outline-hidden'
          }
        >
          <IoMenu className='h-6 w-6' />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className='divide-naples-yellow bg-cerulean ring-opacity-5 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y overflow-hidden rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)] ring-2 ring-white transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
      >
        <div className='py-1'>
          <DropdownMenuItem href='/'>Home</DropdownMenuItem>
          <DropdownMenuItem href='/about'>About Me</DropdownMenuItem>
          <DropdownMenuItem href='/contact'>Contact Me</DropdownMenuItem>
          <DropdownMenuItem prefetch={false} target='_blank' href='https://github.com/JoshJAL'>
            <div className='flex w-full items-center gap-1'>
              <FaGithub className='h-4 w-4' />
              <p>Github</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem prefetch={false} target='_blank' href='https://www.instagram.com/mygovtnamej/'>
            <div className='flex w-full items-center gap-1'>
              <FaInstagram className='h-4 w-4' />
              <p>Instagram</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem prefetch={false} href='https://www.linkedin.com/in/josh-lev/' target='_blank'>
            <div className='flex w-full items-center gap-1'>
              <FaLinkedin className='h-4 w-4' />
              <p>LinkedIn</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem href='/photography'>Photography</DropdownMenuItem>
          <DropdownMenuItem href='/projects'>Projects</DropdownMenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
