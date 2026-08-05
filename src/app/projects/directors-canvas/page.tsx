import ProjectPage from '@/components/projects/ProjectPage';
import DirectorsCanvas from '@/public/projects/directors-canvas.jpg';

export default function Page() {
  return (
    <ProjectPage
      href='https://www.directorscanvas.com/'
      title="Director's Canvas"
      image={DirectorsCanvas}
      imageWide
      tech={[]}
    >
      <p>
        Director&apos;s Canvas is a private-beta workspace for music-video pre-production. It turns an unfinished
        concept into an approved treatment, visual bible, timed storyboard, and production-ready prompt package while
        keeping the director&apos;s creative decisions at the center of the process.
      </p>
      <p>
        The workflow develops a project in deliberate stages. The treatment establishes the concept, the visual bible
        defines identity, world, camera, light, and continuity, and the storyboard maps sections into scenes and
        precisely timed shots.
      </p>
      <p>
        By resolving those choices before generating final frames, the product gives directors a structured production
        package they can review, approve, and carry into the rest of pre-production.
      </p>
    </ProjectPage>
  );
}
