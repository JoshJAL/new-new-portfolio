import ProjectPage from '@/components/projects/ProjectPage';
import Modern from '@/public/projects/cSharp.jpg';

import { TbBrandCSharp } from 'react-icons/tb';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-green-700',
      icon: <TbBrandCSharp className='h-5 w-5' />,
      label: ''
    }
  ];

  return (
    <ProjectPage
      codeHref='https://github.com/JoshJAL/ModernUICSharp'
      title='Modern UI Design'
      image={Modern}
      tech={tech}
    >
      <>
        <p>
          While learning C# I wanted to build something so that I could visualize what I was learning. So I decided to
          build a modern UI design. It uses simple dummy data and doesn&apos;t actually do anything, but I had a great
          time building it and it&apos;s a showcase of my ability to use the language.
        </p>
      </>
    </ProjectPage>
  );
}
