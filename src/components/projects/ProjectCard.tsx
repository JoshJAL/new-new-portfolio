import ButtonLink from '@/components/ui/ButtonLink';
import Image from 'next/image';

import { Roboto } from 'next/font/google';

import type { Project } from '@/types/project';

const roboto = Roboto({ subsets: ['latin'] });

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='bg-cerulean flex w-full flex-col gap-3 rounded-lg border-2 border-white p-3 text-white shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
      <Image
        className={`h-auto w-full rounded-lg ${project.backgroundColor ? project.backgroundColor : 'bg-white'} border-2 border-white shadow-[3px_3px_0px_rgba(0,0,0,1)]`}
        alt={project.title}
        src={project.image}
        placeholder='blur'
        height={300}
        width={300}
        quality={60}
      />
      <h3 className={`text-xl font-semibold ${roboto.className}`}>{project.title}</h3>
      <p className='text-sm text-gray-100'>{project.description}</p>
      <ButtonLink prefetch href={project.href}>
        Learn More
      </ButtonLink>
      {project.codeHref && (
        <ButtonLink colorSwap3 target='_blank' href={project.codeHref} prefetch={false}>
          View Source
        </ButtonLink>
      )}
      {project.projectHref && (
        <ButtonLink colorSwap4 target='_blank' href={project.projectHref}>
          Visit Project
        </ButtonLink>
      )}
    </div>
  );
}
