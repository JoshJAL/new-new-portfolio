import ButtonLink from '@/components/ui/ButtonLink';
import Image from 'next/image';

import type { Project } from '@/types/project';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='bg-desert-sand flex w-full flex-col gap-3 rounded-lg p-3 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)]'>
      <Image
        className={`h-auto w-full rounded-lg ${project.backgroundColor ? project.backgroundColor : 'bg-white'} shadow-[3px_3px_0px_rgba(255,255,255,1)]`}
        alt={project.title}
        src={project.image}
        placeholder='blur'
        height={300}
        width={300}
        quality={60}
      />
      <h3 className='text-xl font-semibold'>{project.title}</h3>
      <p className='text-sm text-gray-700'>{project.description}</p>
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
