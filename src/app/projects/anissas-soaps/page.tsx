import ProjectPage from '@/components/projects/ProjectPage';
import AnissasSoaps from '@/public/projects/anissas-soaps.webp';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-gradient-to-r from-purple-600 to-blue-500',
      icon: <SiClerk className='h-5 w-5' />,
      label: 'Clerk'
    },
    {
      color: 'bg-black',
      icon: <RiNextjsLine className='h-5 w-5' />,
      label: 'Next.js'
    },
    {
      color: 'bg-blue-400',
      icon: <SiSqlite className='h-5 w-5' />,
      label: 'SQLite'
    },
    {
      color: 'bg-cyan-400',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      color: 'bg-blue-500',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage href='https://www.anissasoaps.com/' title="Anissa's Soaps" image={AnissasSoaps} tech={tech}>
      <>
        <p>
          An artisan soap company needed a website to be able to sell their products online and market well. Anissa
          approached me and asked if I would help her do this and I said yes without hesistation. She crafts her soaps
          by hand using all natural ingredients and they smell fantastic!
        </p>
        <p>
          I created her front-end and her back-end so that she could manager her orders both bulk and small, as well as
          manage any inquiries on wholesale opportunities. Her back-end is secured using Clerk.
        </p>
      </>
    </ProjectPage>
  );
}
