import ProjectPage from '@/components/projects/ProjectPage';
import Omar from '@/public/projects/o-almanzar.webp';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-black',
      icon: <RiNextjsLine className='h-5 w-5' />,
      label: 'Next.js'
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
    <ProjectPage
      imagePadding='bg-white'
      href='https://www.almanzarlaw.com/'
      title='Almanzar-Paramio Law, LLC'
      image={Omar}
      tech={tech}
    >
      <>
        <p>
          When a lawyer approached me that he needed an overhaul of his website, I thought of it as a wonderful
          opportunity for both of my worlds to finally collide. I had attended law school previously and got my
          undergraduate degree in legal studies, so I was excited to take this on and help Omar out.
        </p>
        <p>
          A fairly simple site, but it is internationalized (multi-lingual) and has a lot of cool features that I am
          proud of. It is highly optimized and users can schedule a consultation with Omar directly from the site.
        </p>
      </>
    </ProjectPage>
  );
}
