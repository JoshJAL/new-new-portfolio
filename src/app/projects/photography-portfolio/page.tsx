import ProjectPage from '@/components/projects/ProjectPage';
import PhotographyPortfolio from '@/public/projects/photography-portfolio.jpeg';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTanstack, SiThreedotjs } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <FaReact className='size-5' />,
      label: 'React'
    },
    {
      borderColor: 'border-red-500/20',
      color: 'bg-red-500/50',
      icon: <SiTanstack className='size-5' />,
      label: 'TanStack Start'
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
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <SiThreedotjs className='size-5' />,
      label: 'Three.js'
    }
  ];

  return (
    <ProjectPage
      codeHref='https://github.com/JoshJAL/photography-portfolio'
      href='https://photography-portfolio-two-lyart.vercel.app/'
      title='Joshua Levine Photography'
      image={PhotographyPortfolio}
      imageWide
      tech={tech}
    >
      <p>
        Joshua Levine Photography is my personal photo archive. Images are organized chronologically by year and month,
        giving trips, places, and everyday moments a permanent home outside the pace of a social feed.
      </p>
      <p>
        Visitors can move through the archive one month at a time and open individual photographs for a focused view.
        The simple chronology keeps the collection easy to browse while letting each image remain the center of the
        experience.
      </p>
      <p>
        This project&apos;s source repository is public, including the React and TanStack Start application, Tailwind
        styling, and the Three.js-powered visual details.
      </p>
    </ProjectPage>
  );
}
