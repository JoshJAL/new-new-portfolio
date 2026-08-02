import ProjectPage from '@/components/projects/ProjectPage';
import Scribble from '@/public/projects/scribble.jpg';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine } from 'react-icons/ri';
import { SiClerk, SiSqlite, SiTurso } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='size-5' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-5' />,
      label: 'TypeScript'
    },
    {
      borderColor: 'border-green-400/20',
      color: 'bg-green-400/50',
      icon: <SiTurso className='size-5' />,
      label: 'Turso',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='size-5' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-linear-to-r from-purple-600/50 to-blue-500/50',
      icon: <SiClerk className='size-5' />,
      label: 'Clerk'
    }
  ];

  return (
    <ProjectPage title='AI CV/Resume Generator' image={Scribble} tech={tech}>
      <>
        <p>
          The AI CV/Resume Generator provides authenticated user profiles and job-application tracking, with application
          data persisted through SQLite and Turso. Clerk handles authentication, and the app is built with Next.js and
          TypeScript.
        </p>
        <p>
          The project began as a resume and cover letter generator and has evolved into a broader application workflow
          for organizing profiles, tracking opportunities, and managing the job-search process.
        </p>
      </>
    </ProjectPage>
  );
}
