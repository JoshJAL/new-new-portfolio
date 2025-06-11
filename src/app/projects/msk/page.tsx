import ProjectPage from '@/components/projects/ProjectPage';
import Msk from '@/public/projects/msk.png';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-gradient-to-r from-purple-600/50 to-blue-500/50',
      icon: <SiClerk className='h-5 w-5' />,
      label: 'Clerk'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='h-5 w-5' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='h-5 w-5' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
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
    <ProjectPage href='https://www.mskstructuraltherapy.com/' title='MSK Structural Therapy' image={Msk} tech={tech}>
      <>
        <p>
          Melissa is a licensed massage therapist and certified neurosomatic therapist with a passion for helping. When
          she approached me to create her website I got overwhelmingly excited. My mother was in desperate need of this
          kind of physical therapy and Melissa was already helping her. The goal of this therapy is to unwind postural
          patterns and restore the body to move freely without restriction through all planes of motion.
        </p>
        <p>
          I built both her front-end and her back-end so that she could not only schedule her open time slots but so
          that users could reserve those time slots as well. When prompted users are asked to fill out the intake form
          if they have not done so previously. This was a wonderful project and figuring out time zones and calendar
          scheduling is a task that should not be this difficult but such is the world of web-development!
        </p>
      </>
    </ProjectPage>
  );
}
