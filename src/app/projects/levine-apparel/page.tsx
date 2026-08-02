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
      borderColor: 'border-purple-600/20',
      color: 'bg-linear-to-tr from-purple-600/50 via-black to-pink-500/50',
      icon: <SiAstro className='size-5' />,
      label: 'Astro'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <FaReact className='size-5' />,
      label: 'React'
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
