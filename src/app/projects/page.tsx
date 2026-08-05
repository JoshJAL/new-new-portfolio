import ProjectCard from '@/components/projects/ProjectCard';

import { PORTFOLIO_PROJECTS } from '@/utils/projects/projectCatalog';

export default function Page() {
  return (
    <article className='flex w-full flex-col gap-5'>
      <h1>Projects</h1>
      <p>
        This is a curated selection of products and client work I&apos;ve built across AI, creative tools, games,
        e-commerce, and the web.
      </p>
      <p>
        Every card links to its public production site. Source is included where the repository is public; some client
        and product repositories remain private.
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </article>
  );
}
