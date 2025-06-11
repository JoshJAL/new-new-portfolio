import ProjectPage from '@/components/projects/ProjectPage';
import ThreeD from '@/public/projects/3D-portfolio.png';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandThreejs } from 'react-icons/tb';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <FaReact className='h-5 w-5' />,
      label: 'React'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-white/20',
      color: 'bg-white/50',
      icon: <TbBrandThreejs className='h-5 w-5' />,
      label: 'Three.js',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage
      codeHref='https://github.com/JoshJAL/3d-portfolio'
      href='https://3dportfolio.joshualevine.me/'
      title='3D Portfolio'
      image={ThreeD}
      tech={tech}
    >
      <>
        <p>
          Yet another build of my portfolio, but this one is a little different. I had just learned about a new library
          called Three.js and wanted to give it a shot. This thing is overwhelmingly complex and really really cool. I
          have received tons of compliments on this build, but I promise you it does not even scratch the surface of
          what is possible with this library.
        </p>
      </>
    </ProjectPage>
  );
}
