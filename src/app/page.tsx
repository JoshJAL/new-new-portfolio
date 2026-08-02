import Education from '@/components/home/Education';
import Experience from '@/components/home/Experience';
import Freelance from '@/components/home/Freelance';
import Intro from '@/components/home/Intro';
import RecentProjects from '@/components/home/RecentProjects';
import BackToTopButton from '@/components/ui/BackToTopButton';

export default function Home() {
  return (
    <article className='flex w-full flex-col gap-12'>
      <Intro />
      <RecentProjects />
      <Experience />
      <Freelance />
      <Education />
      <BackToTopButton />
    </article>
  );
}
