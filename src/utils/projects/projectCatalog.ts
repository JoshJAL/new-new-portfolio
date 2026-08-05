import AgentMakerIcon from '@/public/projects/agent-maker.jpeg';
import AiCvResumes from '@/public/projects/ai-cv-resumes.png';
import CineWhisper from '@/public/projects/cinewhisper.png';
import CoastalCrumb from '@/public/projects/coastal-crumb.jpg';
import DirectorsCanvas from '@/public/projects/directors-canvas.jpg';
import LetterRiot from '@/public/projects/letter-riot.png';
import Monster from '@/public/projects/monster_logo_white.webp';
import PhotographyPortfolio from '@/public/projects/photography-portfolio.jpeg';
import TaskPilotLogo from '@/public/projects/taskpilot.jpeg';

import type { PortfolioProject } from '@/types/project';

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    description:
      'An AI-assisted music-video pre-production workflow that turns an unfinished concept into an approved treatment, visual bible, timed storyboard, and production package. Currently in private beta.',
    href: '/projects/directors-canvas',
    id: 'directors-canvas',
    image: DirectorsCanvas,
    isFeatured: true,
    projectHref: 'https://www.directorscanvas.com/',
    title: "Director's Canvas"
  },
  {
    description:
      'A reusable-resume toolkit for building a career profile, tailoring resumes and cover letters to specific roles, and tracking applications in one place.',
    href: '/projects/ai-cv-resumes',
    id: 'ai-cv-resumes',
    image: AiCvResumes,
    isFeatured: true,
    projectHref: 'https://www.aicvresumes.com/',
    title: 'AI CV Resumes'
  },
  {
    description:
      'A no-filter word game for solo play, local game nights, and online rooms, with quick casual matches and ranked competition.',
    href: '/projects/letter-riot',
    id: 'letter-riot',
    image: LetterRiot,
    isFeatured: true,
    projectHref: 'https://letterriot.com/',
    title: 'LetterRiot'
  },
  {
    description:
      'A conversational film and show recommender that learns your mood and taste, then returns curated picks with ratings and streaming details.',
    href: '/projects/cinewhisper',
    id: 'cinewhisper',
    image: CineWhisper,
    isFeatured: false,
    projectHref: 'https://www.cinewhisper.com/',
    title: 'CineWhisper'
  },
  {
    codeHref: 'https://github.com/JoshJAL/photography-portfolio',
    description:
      'A personal photography archive organized by month and year, preserving places, moments, and everyday life in a browsable gallery.',
    href: '/projects/photography-portfolio',
    id: 'photography-portfolio',
    image: PhotographyPortfolio,
    isFeatured: false,
    projectHref: 'https://photography-portfolio-two-lyart.vercel.app/',
    title: 'Joshua Levine Photography'
  },
  {
    backgroundColor: 'bg-project-slate',
    codeHref: 'https://github.com/JoshJAL/claude-trello',
    description:
      'Point AI coding agents at your task boards. Connects to Trello, GitHub, and GitLab with support for Claude, OpenAI, and Groq. Desktop app available.',
    href: '/projects/claude-trello',
    id: 'taskpilot',
    image: TaskPilotLogo,
    isFeatured: false,
    projectHref: 'https://ct.joshualevine.me/',
    title: 'TaskPilot'
  },
  {
    backgroundColor: 'bg-project-slate',
    description:
      'Interactive CLI wizard that generates CLAUDE.md, AGENTS.md, and GEMINI.md files for your project with AI-powered suggestions and optional framework scaffolding.',
    href: '/projects/agent-maker',
    id: 'agent-maker',
    image: AgentMakerIcon,
    isFeatured: false,
    projectHref: 'https://agent.task-pilot.dev/',
    title: 'Agent Maker'
  },
  {
    description: 'Sourdough bakery website, genuinely delicious products. Check them out!',
    href: '/projects/coastal-crumb',
    id: 'coastal-crumb',
    image: CoastalCrumb,
    isFeatured: false,
    projectHref: 'https://www.coastalcrumbllc.com/',
    title: 'Coastal Crumb'
  },
  {
    backgroundColor: 'bg-black p-3',
    description:
      'While serving as lead developer at Monster Transmission & Performance, I built its internal tooling and helped develop and design its public-facing website.',
    href: '/projects/monster',
    id: 'monster',
    image: Monster,
    isFeatured: false,
    projectHref: 'https://www.monstertransmission.com/',
    title: 'Monster Transmission & Performance'
  }
];

export const FEATURED_PORTFOLIO_PROJECTS: readonly PortfolioProject[] = PORTFOLIO_PROJECTS.filter(
  (project) => project.isFeatured
);
