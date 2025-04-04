import ProjectPage from '@/components/projects/ProjectPage';
import ThingsIUse from '@/public/projects/things-i-use.jpg';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiAstro } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-gradient-to-tr from-purple-600 via-black to-pink-500',
      icon: <SiAstro className='h-5 w-5' />,
      label: 'Astro'
    },
    {
      color: 'bg-blue-400',
      icon: <FaReact className='h-5 w-5' />,
      label: 'React'
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
      codeHref='https://github.com/JoshJAL/what-i-use'
      href='https://tiu.joshualevine.me/'
      title='Things I Use'
      image={ThingsIUse}
      tech={tech}
    >
      <>
        <p>
          To further explore Astro I took a little time a built a site for myself of the things that I commonly use
          either on a daily basis or while I code. It has not been updated in some time even though the things I use
          definitely have been. This was a fun little side project for me and really helped me learn some more of
          Astro&apos;s nuances.
        </p>
      </>
    </ProjectPage>
  );
}
