import GlassButtonLink from '@/components/ui/GlassButtonLink';
import Image from 'next/image';

import { Roboto } from 'next/font/google';

import type { Project } from '@/types/project';

const roboto = Roboto({ subsets: ['latin'] });

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='bg-cerulean/50 border-cerulean/20 pop glass-edge flex w-full flex-col gap-3 rounded-2xl border p-3 text-white liquid-blur'>
      <div className='relative w-full overflow-hidden rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)]'>
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
      <h3 className={`text-xl font-semibold ${roboto.className}`}>{project.title}</h3>
      <p className='text-sm text-gray-100'>{project.description}</p>
      <GlassButtonLink prefetch href={project.href}>
        Learn More
      </GlassButtonLink>
      {project.codeHref && (
        <GlassButtonLink colorSwap3 target='_blank' href={project.codeHref} prefetch={false}>
          View Source
        </GlassButtonLink>
      )}
      {project.projectHref && (
        <GlassButtonLink colorSwap4 target='_blank' href={project.projectHref}>
          Visit Project
        </GlassButtonLink>
      )}
    </div>
  );
}
