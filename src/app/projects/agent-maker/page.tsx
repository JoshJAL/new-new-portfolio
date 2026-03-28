import ProjectPage from '@/components/projects/ProjectPage';
import AgentMakerIcon from '@/public/projects/agent-maker.jpeg';

import { BiLogoTypescript } from 'react-icons/bi';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage
      codeHref='https://github.com/JoshJAL/agent-maker'
      href='https://www.npmjs.com/package/@joshjal/agent-maker'
      title='Agent Maker'
      image={AgentMakerIcon}
      imageBackgroundColor='bg-[#50767c]'
      tech={tech}
    >
      <p>
        I am particularly proud of this project. I have been experimenting with AI quite a bit as I am sure that
        everyone is right now and when seeing my friends who do not code attempt to create projects with no real idea of
        where to go I thought I would make it easier for them and for myself.
      </p>
      <p>
        Agent Maker is an interactive CLI wizard that generates CLAUDE.md, AGENTS.md, and GEMINI.md files for your
        project with AI-powered suggestions and optional framework scaffolding. It walks you through creating proper
        instructions for your AI coding agent to start taking over your project and it will even scaffold and name the
        project for you at the end.
      </p>
      <p>
        It speeds up development and proper creation of these tools not only for people who don&apos;t know what
        they&apos;re doing but especially for those that do. Getting a project off the ground with the right agent
        configuration from the start saves a ton of time down the line.
      </p>
    </ProjectPage>
  );
}
