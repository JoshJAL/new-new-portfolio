import ProjectPage from '@/components/projects/ProjectPage';
import Joshua from '@/public/projects/happyHeadshot.jpg';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiAstro } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-gradient-to-tr from-purple-600 via-black to-pink-500',
      icon: <SiAstro className='h-5 w-5' />,
      label: 'Astro'
    },
    {
      color: 'bg-blue-400',
      icon: <FaReact className='h-5 w-5' />,
      label: 'React'
    },
    {
      color: 'bg-cyan-400',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      color: 'bg-white',
      icon: <TbBrandThreejs className='h-5 w-5' />,
      label: 'Three.js',
      textColor: 'text-black'
    },
    {
      color: 'bg-blue-500',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage
      codeHref='https://github.com/JoshJAL/astro-portfolio-rebuild'
      href='https://astro.joshualevine.me/'
      title='Astro Portfolio'
      image={Joshua}
      tech={tech}
    >
      <>
        <p>
          I was really enjoying Astro as a framework and decided to explore it by building my portfolio with it.
          Honestly, I would highly recommend you checking it out if you haven&apos;t already. It is a really cool
          Javascript framework that allows you to utilize any other framework inside of it to build your
          &quot;islands&quot;. It also allows you to control when those &quot;islands&quot; hydrate for the client
          allowing for optimized and really fast websites with little effort.
        </p>
        <p>
          Around the time I was building this I was also getting into a new Javascript library called Three.js which
          allows you to utilize 3D objects in the browser. It is really cool and I even built another version of my
          portfolio with it. People have gone so far as to create whole 3D games in the browser that are highly
          optimized and can be run on just about anything. I just threw a simple set of trees on my home page and linked
          over to my 3D portfolio that has some more stuff on it, but it is a really fun and complex library to work
          with.
        </p>
      </>
    </ProjectPage>
  );
}
