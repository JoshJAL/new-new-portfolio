import ProjectPage from '@/components/projects/ProjectPage';
import NPMIcon from '@/public/projects/npm-icon.png';

import { BiLogoTypescript } from 'react-icons/bi';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-blue-500',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage
      tech={tech}
      image={NPMIcon}
      href='https://www.npmjs.com/package/ez-funcs'
      codeHref='https://github.com/JoshJAL/ez-funcs'
      title='ez-funcs'
    >
      <p>
        I found myself copying and pasting the same utility functions between personal and professional projects
        constantly so I finally decided to throw them into an npm package so that I can easily install them wherever I
        need them.{' '}
      </p>
      <p>
        I honestly though this was going to be much more difficult than it is, but you can honestly throw together your
        package with good documentation in a matter of minutes. This entire project, including it&apos;s documentation
        only took me 30 minutes from start to finish and it was only my second time doing it.
      </p>
      <p>
        If you haven&apos;t creating your own NPM package I would recommend throwing a simple one together and
        publishing it to go through the process. You will be shocked to find out just how easy it is.
      </p>
      <p>
        There are a couple things that I think every developer should do to get over that imposter syndrome hump and I
        think creating and publishing an npm package is one of those things. It will make you a better developer overall
        that&apos;s for sure, but what is most important is it will make you FEEL like a better developer and
        that&apos;s like 90% of the battle won.
      </p>
    </ProjectPage>
  );
}
