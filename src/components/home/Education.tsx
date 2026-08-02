import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Education() {
  return (
    <section className='flex w-full flex-col gap-6'>
      <SectionHeading id='education'>Education</SectionHeading>
      <p className='text-desert-sand'>
        I earned my Legal Studies degree from UCF in 2019. After college, I attended law school and then worked at
        HealthXL while figuring out what came next. Once I found development, I fell in love with it and landed my first
        developer role in 2022. I kept building that foundation through Thinkful&apos;s Full Stack Web Development
        Bootcamp, which I completed in 2023, and I have never looked back.
      </p>
      <GlassPanel tint='verdigris' className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <h3>University of Central Florida</h3>
          <p className='text-sm text-champagne'>Orlando, FL &middot; 08/2015 - 12/2019</p>
        </div>
        <p>Bachelors of Arts in Legal Studies</p>
      </GlassPanel>
      <GlassPanel tint='verdigris' className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <h3>Thinkful</h3>
          <p className='text-sm text-champagne'>Full Stack Web Development Bootcamp &middot; 10/2022 - 03/2023</p>
        </div>
        <ul className='list-inside list-disc'>
          <li>
            Industry best practices and software development standards with a focus on JavaScript, HTML5, CSS3, Node.js,
            PostgreSQL, RESTful API&apos;s.
          </li>
          <li>
            Studied the tradeoffs in data structures, including arrays, linked lists, stacks, queues, and trees as well
            as various search algorithms and recursion.
          </li>
        </ul>
      </GlassPanel>
    </section>
  );
}
