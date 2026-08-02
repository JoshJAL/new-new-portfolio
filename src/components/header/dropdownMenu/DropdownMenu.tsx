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
            'nice-hover-no-shadow pop inline-flex cursor-pointer justify-center rounded-xl border border-bittersweet/30 bg-bittersweet/50 p-2 text-sm font-medium text-white liquid-blur transition-[background-color,border-color,color,box-shadow] hover:border-naples-yellow/30 hover:bg-naples-yellow/50 hover:text-black focus:outline-hidden'
          }
        >
          <IoMenu className='size-6' />
        </MenuButton>
      </div>
      <MenuItems
        as='div'
        transition
        className='subtle-pop absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-naples-yellow overflow-hidden rounded-2xl bg-cerulean/80 ring ring-cerulean/20 liquid-blur transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
      >
        <div className='py-1'>
          <DropdownMenuItem href='/'>Home</DropdownMenuItem>
          <DropdownMenuItem href='/about'>About Me</DropdownMenuItem>
          <DropdownMenuItem href='/contact'>Contact Me</DropdownMenuItem>
          <DropdownMenuItem prefetch={false} target='_blank' href='https://github.com/JoshJAL'>
            <div className='flex w-full items-center gap-1'>
              <FaGithub className='size-4' />
              <p>Github</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem href='/guides'>Guides</DropdownMenuItem>
          <DropdownMenuItem prefetch={false} target='_blank' href='https://www.instagram.com/mygovtnamej/'>
            <div className='flex w-full items-center gap-1'>
              <FaInstagram className='size-4' />
              <p>Instagram</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem prefetch={false} href='https://www.linkedin.com/in/josh-lev/' target='_blank'>
            <div className='flex w-full items-center gap-1'>
              <FaLinkedin className='size-4' />
              <p>LinkedIn</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem href='/packages'>Packages</DropdownMenuItem>
          <DropdownMenuItem prefetch={false} target='_blank' href='https://photography.joshualevine.me'>
            Photography
          </DropdownMenuItem>
          <DropdownMenuItem href='/projects'>Projects</DropdownMenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
