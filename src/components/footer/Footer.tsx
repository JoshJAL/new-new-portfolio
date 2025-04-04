import { EMAIL } from '@/consts';

import { Link } from 'next-view-transitions';
import { FaCamera, FaCode, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { TiDocumentText, TiMail } from 'react-icons/ti';

export default function Footer() {
  const links = [
    {
      href: '/about',
      icon: <TiDocumentText className='h-5 w-5' />,
      label: 'About Me',
      prefetch: true,
      target: '_self' as const
    },
    {
      href: '/contact',
      icon: <IoMdContact className='h-5 w-5' />,
      label: 'Contact Me',
      prefetch: true,
      target: '_self' as const
    },
    {
      href: `mailto:${EMAIL}`,
      icon: <TiMail className='h-5 w-5' />,
      label: 'Email',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: `https://github.com/JoshJAL`,
      icon: <FaGithub className='h-5 w-5' />,
      label: 'GitHub',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: 'https://www.instagram.com/mygovtnamej/',
      icon: <FaInstagram className='h-5 w-5' />,
      label: 'Instagram',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: 'https://www.linkedin.com/in/josh-lev/',
      icon: <FaLinkedin className='h-5 w-5' />,
      label: 'LinkedIn',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: '/photography',
      icon: <FaCamera className='h-5 w-5' />,
      label: 'Photography',
      prefetch: true,
      target: '_self' as const
    },
    {
      href: '/projects',
      icon: <FaCode className='h-5 w-5' />,
      label: 'Projects',
      prefetch: true,
      target: '_self' as const
    }
  ];

  return (
    <footer className='bg-desert-sand text-dark-purple flex w-full flex-col gap-5 border-t-2 border-white p-5'>
      <p className='text-center text-sm'>&copy; {new Date().getFullYear()} Joshua Levine</p>
      <nav className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-5'>
        {links.map((link) => (
          <FooterLink key={link.href} href={link.href} prefetch={link.prefetch} target={link.target}>
            <div className='flex items-center gap-2'>
              {link.icon} <p>{link.label}</p>
            </div>
          </FooterLink>
        ))}
      </nav>
    </footer>
  );
}

interface FooterLinkProps {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  target?: '_blank' | '_self';
}

function FooterLink({ children, href, prefetch = true, target = '_self' }: FooterLinkProps) {
  return (
    <Link
      prefetch={prefetch}
      href={href}
      target={target}
      className='text-dark-purple w-fit text-center underline-offset-4 hover:underline'
    >
      {children}
    </Link>
  );
}
