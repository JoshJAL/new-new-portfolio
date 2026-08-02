import ProjectPage from '@/components/projects/ProjectPage';
import TaskPilotLogo from '@/public/projects/taskpilot.jpeg';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiSqlite } from 'react-icons/si';

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
      borderColor: 'border-white/20',
      color: 'bg-white/50',
      icon: <RiNextjsLine className='size-5' />,
      label: 'Next.js',
      textColor: 'text-black'
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
      borderColor: 'border-sky-400/20',
      color: 'bg-sky-400/50',
      icon: <SiSqlite className='size-5' />,
      label: 'SQLite',
      textColor: 'text-black'
    }
  ];

  return (
    <ProjectPage
      codeHref='https://github.com/JoshJAL/claude-trello'
      href='https://claude-trello-two.vercel.app'
      title='TaskPilot'
      image={TaskPilotLogo}
      imageBackgroundColor='bg-project-slate'
      tech={tech}
    >
      <p>
        TaskPilot is a full-stack web application that lets you point AI coding agents at your task boards. It connects
        to Trello, GitHub, and GitLab, reads your cards and issues, and uses AI to work through them — checking off
        items as it goes.
      </p>
      <p>
        It supports multiple AI providers including Claude (Anthropic), OpenAI (GPT-4o), and Groq (Llama 3.3 70B). It
        can run parallel agents with one agent per card in isolated git worktrees with automatic merge, and it
        automatically creates pull requests after sessions complete.
      </p>
      <p>
        Features include smart dependency detection, cost tracking with per-session token breakdowns, monthly budgets
        with alerts, full session history with event log replay, and real-time webhook receivers for instant task source
        changes.
      </p>
      <p>
        There is also a desktop app available for TaskPilot, making it easy to manage your AI-powered workflow without
        needing a browser. The desktop app provides the same full feature set in a native experience.
      </p>
      <p>
        TaskPilot is fully self-hostable — bring your own API keys, database, and OAuth apps. There is no shared
        server-side API key, every user supplies their own AI provider keys.
      </p>
    </ProjectPage>
  );
}
