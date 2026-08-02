import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Education() {
  return (
    <section className='flex w-full flex-col gap-6'>
      <SectionHeading id='education'>Education</SectionHeading>
      <p className='text-desert-sand'>
        I went to college from 2015 - 2019 and got my degree in legal studies, then after that I attended Stetson
        College of Law for one year from 2021-2022. While in law school I realized that I was not happy and I was never
        going to be happy doing law. I wish I had realized that sooner of course, but to be fair I was just in school
        because I had always been told that that was what you had to do to get ahead, so I did it. After leaving law
        school I worked for a company called HealthXL in a customer service facing role while I figured out my next
        step. After speaking with my sister and brother-in-law, who is also a developer, they convinced me to give
        development a shot. I signed up for a bootcamp the very next week and fell in love immediately. I completed the
        bootcamp and throughout my time in it I took all the time to learn everything I could about development in a
        short period of time, this is what people must have meant when they said &quot;If you do what you love you will
        never work a day in your life.&quot; Within a month I had my first job as a developer and I never looked back.
        This is what I was meant to do and I was not going to let it get away from me.
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
