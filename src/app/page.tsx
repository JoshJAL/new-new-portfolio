import Education from '@/components/home/Education';
import Experience from '@/components/home/Experience';
import Intro from '@/components/home/Intro';
import RecentProjects from '@/components/home/RecentProjects';

export default function Home() {
  return (
    <article className='flex w-full flex-col gap-5'>
      <Intro />
      <RecentProjects />
      <Experience />
      <Education />
    </article>
  );
}
