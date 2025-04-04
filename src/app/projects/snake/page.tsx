import ProjectPage from '@/components/projects/ProjectPage';
import Snake from '@/public/projects/snake.jpg';

import { FaJava } from 'react-icons/fa';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-gradient-to-tr from-orange-800 via-red-700 to-blue-800',
      icon: <FaJava className='h-5 w-5' />,
      label: 'Java'
    }
  ];

  return (
    <ProjectPage codeHref='https://github.com/JoshJAL/JavaSnake' title='Java Snake' image={Snake} tech={tech}>
      <>
        <p>
          While I was learning Java I wanted to build something fun with it. After some thinking I landed on building
          Snake from scratch using only Java. It was a lot of fun to do and I spent a couple of hours playing the game
          after I built it. Maybe one day I will get in there and extend it further, but in the meantime it is a
          showcase of my Java skills.
        </p>
      </>
    </ProjectPage>
  );
}
