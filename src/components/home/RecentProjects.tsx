import ProjectCard from '@/components/projects/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import StyledLink from '@/components/ui/StyledLink';

import { FEATURED_PORTFOLIO_PROJECTS } from '@/utils/projects/projectCatalog';

export default function RecentProjects() {
  return (
    <section className='flex w-full flex-col gap-6'>
      <SectionHeading id='projects'>Recent Projects</SectionHeading>
      <p className='text-desert-sand'>
        A few of the products I&apos;ve built recently. Browse the complete{' '}
        <StyledLink colorSwap href='/projects'>
          curated portfolio
        </StyledLink>
        .
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {FEATURED_PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
