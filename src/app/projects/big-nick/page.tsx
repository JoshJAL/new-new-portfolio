import ProjectPage from '@/components/projects/ProjectPage';
import BigNick from '@/public/projects/big-nick.webp';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
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
    <ProjectPage href='https://big-nick.vercel.app/' title="Big Nick's Car Wash" image={BigNick} tech={tech}>
      <>
        <p>
          A young man approached me with the idea of starting his own business after he had graduated school. He was
          passionate and driven and had a clear idea of what he wanted. So, I helped him build out Big Nick&apos;s car
          wash. He was extremely happy with the site and I was happy to help him get started on his journey.
        </p>
        <p>
          The site was never completely finished, but I do know that he eventually wants to continue working on this
          project and get it completed, one day I will update this page with the final product because all it is missing
          is an about page and a proper domain.
        </p>
      </>
    </ProjectPage>
  );
}
