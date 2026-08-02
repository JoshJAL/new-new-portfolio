import ProjectPage from '@/components/projects/ProjectPage';
import AnissasSoaps from '@/public/projects/anissas-soaps.webp';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-linear-to-r from-purple-600/50 to-blue-500/50',
      icon: <SiClerk className='size-5' />,
      label: 'Clerk'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='size-5' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='size-5' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='size-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-5' />,
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
