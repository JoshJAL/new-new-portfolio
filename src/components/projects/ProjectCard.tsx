import GlassButtonLink from '@/components/ui/GlassButtonLink';
import GlassPanel from '@/components/ui/GlassPanel';
import Image from 'next/image';
import TiltCard from '@/components/ui/TiltCard';

import type { Project } from '@/types/project';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <TiltCard className='w-full'>
      <GlassPanel tint='cerulean' className='flex size-full flex-col gap-3 p-3 sm:p-4'>
        <div className='relative w-full overflow-hidden rounded-xl media-shadow'>
          <div className='pop absolute inset-0 z-10 bg-black/10'></div>
          <Image
            className={`h-auto w-full ${project.backgroundColor ? project.backgroundColor : 'bg-white'}`}
            alt={project.title}
            src={project.image}
            placeholder='blur'
            height={300}
            width={300}
            quality={60}
          />
        </div>
        <h3 className='font-display text-xl font-semibold'>{project.title}</h3>
        <p className='text-sm text-gray-100'>{project.description}</p>
        <div className='flex-1' />
        <div className='flex flex-wrap items-center gap-3'>
          <GlassButtonLink fit prefetch href={project.href}>
            Learn More
          </GlassButtonLink>
          {project.codeHref && (
            <a
              target='_blank'
              rel='noreferrer'
              href={project.codeHref}
              className='gradient_underline pb-0.5 text-sm text-champagne'
            >
              View source
            </a>
          )}
          {project.projectHref && (
            <a
              target='_blank'
              rel='noreferrer'
              href={project.projectHref}
              className='gradient_underline pb-0.5 text-sm text-champagne'
            >
              Visit project
            </a>
          )}
        </div>
      </GlassPanel>
    </TiltCard>
  );
}
