import ProjectCard from '@/components/projects/ProjectCard';
import NPMIcon from '@/public/projects/npm-icon.png';

import type { Project } from '@/types/project';

export default function Page() {
  const packages: Project[] = [
    {
      codeHref: 'https://github.com/JoshJAL/ez-funcs',
      description:
        'A list of easy utility functions that I use in a variety of projects both personally and professionally. I created an npm package for it so I can easily install them rather than copying and pasting over and over again.',
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
      <h1>Packages</h1>
      <p>
        Open source npm packages I&apos;ve published. These are tools and utilities I built to solve problems I kept
        running into across projects, so I packaged them up for anyone to use. Each one is available on npm and fully
        open source on GitHub.
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {packages.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </article>
  );
}
