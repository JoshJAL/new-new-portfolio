import ProjectCard from '@/components/projects/ProjectCard';
import NPMIcon from '@/public/projects/npm-icon.png';

import type { Project } from '@/types/project';

export default function Page() {
  const projects: Project[] = [
    {
      codeHref: 'https://github.com/JoshJAL/ez-funcs',
      description:
        'A list of easy utility functions that I use in a variety of projects both pewrsonally and professionally. I created an npm package for it so I can easily install them rather than copying and pasting over and over again.',
      href: '/packages/ez-funcs',
      image: NPMIcon,
      projectHref: 'https://www.npmjs.com/package/ez-funcs',
      title: 'ez-funcs'
    },
    {
      codeHref: 'https://github.com/JoshJAL/claude-trello/tree/main/cli',
      description:
        'Point AI coding agents at task boards and work through items from your terminal. Agents read your cards, issues, and checklists, make the code changes, and check items off as they go.',
      href: '/packages/taskpilot',
      image: NPMIcon,
      projectHref: 'https://www.npmjs.com/package/@joshjal/taskpilot',
      title: '@joshjal/taskpilot'
    },
    {
      codeHref: 'https://github.com/JoshJAL/agent-maker/tree/main/cli',
      description:
        'Generate CLAUDE.md, AGENTS.md, and GEMINI.md files for your project through an interactive CLI wizard — with AI-powered suggestions and optional framework scaffolding.',
      href: '/packages/agent-maker',
      image: NPMIcon,
      projectHref: 'https://www.npmjs.com/package/@joshjal/agent-maker',
      title: '@joshjal/agent-maker'
    }
  ];

  return (
    <article className='flex w-full flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p>
        These are most, if not all of the packages that I have worked on. I can&apos;t provide the source code for all
        of my pacakges since they were built for work or clients, but if you care to learn more or visit the public
        facing portion of the packages, feel free to click the links and look around!
      </p>
      <p>
        While most of my projects are private because I wouldn&apos;t want to expose my clients code. My GitHub
        portfolio currently features 105 projects and counting with thouands of commits per year.
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </article>
  );
}
