import ProjectPage from '@/components/projects/ProjectPage';
import NPMIcon from '@/public/projects/npm-icon.png';

import { BiLogoTypescript } from 'react-icons/bi';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage
      tech={tech}
      image={NPMIcon}
      href='https://www.npmjs.com/package/@joshjal/agent-maker'
      codeHref='https://github.com/JoshJAL/agent-maker/tree/main/cli'
      title='@joshjal/agent-maker'
      breadcrumbLabel='Packages'
      breadcrumbLink='/packages'
    >
      <p>
        I am particularly proud of this package. I have been experimenting with AI quite a bit as I am sure that
        everyone is right now and when seeing my friends who do not code attempt to create projects with no real idea of
        where to go I thought I would make it easier for them and for myself.
      </p>
      <p>
        This porject walks you through creating an AGENTS.md with proper instructions for your agent to start taking
        over your project and it will even scaffold and name the project for you at the end. It speeds up development
        and proper creation of these tools not only for people who don&apos;t know what they&apos;re doing but
        especially for those that do.
      </p>
    </ProjectPage>
  );
}
