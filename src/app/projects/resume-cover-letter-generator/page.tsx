import ProjectPage from '@/components/projects/ProjectPage';
import Scribble from '@/public/projects/scribble.jpg';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';

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
    <ProjectPage
      codeHref='https://github.com/JoshJAL/resume-cover-letter-generator/tree/main'
      href='https://resume-cover-letter-generator.vercel.app/'
      title='Resume and Cover Letter Generator'
      image={Scribble}
      tech={tech}
    >
      <>
        <p>
          A very simple project, but one that has helped me and many of my friends immensely. I built this while I was
          looking for jobs and got tired of creating a tailored resume or cover letter for each of them. This lovely
          little tool takes your information and creates a templated cover letter and resume specifically for the job
          that you are applying. It helped me get my current job and it has helped my friends land some jobs as well.
          Maybe it is time I get into it and update it to use AI in some fashion.
        </p>
      </>
    </ProjectPage>
  );
}
