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
      href='https://www.npmjs.com/package/@joshjal/taskpilot'
      codeHref='https://github.com/JoshJAL/claude-trello/tree/main/cli'
      title='@joshjal/taskpilot'
      breadcrumbLabel='Packages'
      breadcrumbLink='/packages'
    >
      <p>
        I started getting the itch to create useful CLI tools from some of the web apps that I was creating for work and
        clients. I had already created a Trello integration for Claude AI agents to read and write to Trello boards, but
        I wanted to be able to interact with those boards from the terminal as well. So I threw together a CLI tool that
        allows you to point an AI agent at a Trello board and have it work through the cards, issues, and checklists on
        that board.
      </p>
      <p>
        This eventually expanded quite a bit you can use other AI gents like ChatGPT and Groq as well and now you are no
        longer tied to just trello boards but to Github and Gitlab issues as well. I have found it very useful for
        smaller tasks and it is very effective, I don&apos;t like building things that I don&apos;t use myself and I
        have been using this often!
      </p>
    </ProjectPage>
  );
}
