import { Link } from 'next-view-transitions';
import { FaCamera, FaCode, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { TiDocumentText, TiMail } from 'react-icons/ti';
import { SITE_CONFIG } from '@/utils/siteConfig';

export default function Footer() {
  const links = [
    {
      href: '/about',
      icon: <TiDocumentText className='size-5' />,
      label: 'About Me',
      prefetch: true,
      target: '_self' as const
    },
    {
      href: '/contact',
      icon: <IoMdContact className='size-5' />,
      label: 'Contact Me',
      prefetch: true,
      target: '_self' as const
    },
    {
      href: `mailto:${SITE_CONFIG.email}`,
      icon: <TiMail className='size-5' />,
      label: 'Email',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: `https://github.com/JoshJAL`,
      icon: <FaGithub className='size-5' />,
      label: 'GitHub',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: 'https://www.instagram.com/mygovtnamej/',
      icon: <FaInstagram className='size-5' />,
      label: 'Instagram',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: 'https://www.linkedin.com/in/josh-lev/',
      icon: <FaLinkedin className='size-5' />,
      label: 'LinkedIn',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: 'https://photography.joshualevine.me',
      icon: <FaCamera className='size-5' />,
      label: 'Photography',
      prefetch: false,
      target: '_blank' as const
    },
    {
      href: '/projects',
      icon: <FaCode className='size-5' />,
      label: 'Projects',
      prefetch: true,
      target: '_self' as const
    }
  ];

  return (
    <footer className='flex w-full flex-col gap-5 border-t border-white/10 bg-dark-purple/40 p-5 pb-20 text-white liquid-blur'>
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
      className='gradient_underline w-fit text-center text-champagne'
    >
      {children}
    </Link>
  );
}
