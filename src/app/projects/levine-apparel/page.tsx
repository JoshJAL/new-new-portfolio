import ProjectPage from '@/components/projects/ProjectPage';
import Michael from '@/public/projects/Michael-Levine.jpg';

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
    <ProjectPage href='https://apparel-solution.com/' title='Levine Apparel Solutions' image={Michael} tech={tech}>
      <>
        <p>
          Another simple project. The US arm of a Vietnam based apparel company asked that I revamp their landing page
          and incorporate their YouTube videos into it. I was still loving Astro at this point so I built it using that
          and also ultized YouTube&apos;s API&apos;s to pull in their most recent ten videos from their feed and present
          them to the user. You can message Michael directly from the site and an email will be sent to him regarding
          your inquiry. This site features a light and a dark mode as well.
        </p>
      </>
    </ProjectPage>
  );
}
