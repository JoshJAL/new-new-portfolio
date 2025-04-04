import ProjectPage from '@/components/projects/ProjectPage';
import Me from '@/public/me.jpeg';

import { BiLogoTypescript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiResend, SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-purple-800',
      icon: <BsFiletypeCss className='h-5 w-5' />,
      label: 'CSS'
    },
    {
      color: 'bg-black',
      icon: <RiNextjsLine className='h-5 w-5' />,
      label: 'Next.js'
    },
    {
      color: 'bg-black',
      icon: <SiResend className='h-5 w-5' />,
      label: 'Resend'
    },
    {
      color: 'bg-blue-400',
      icon: <SiSqlite className='h-5 w-5' />,
      label: 'SQLite'
    },
    {
      color: 'bg-cyan-400',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      color: 'bg-blue-500',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage codeHref='https://github.com/JoshJAL/new-new-portfolio' title='Portfolio' image={Me} tech={tech}>
      <>
        <p>
          I decided to rebuild my portfolio again because my coding style has changed drastically as well as the design
          style that I am leaning towards right now. I made something a little more my own with the technologies that I
          enjoy using. If you&apos;re looking at the tech stack above that I used and thinking that this thing is a
          little over-engineered for what it is, well then, you would be correct! However, that is kind of the point.
        </p>
        <p>
          For the past couple of years I have become overwhelmingly comfortable using React and specifically Next.js to
          build new projects. It allows me to keep the stack uniform, and does not stray to far from the beaten path
          that I know during the hiring process we woudl be able to easily and quickly find confident developers who
          were able to jump in and feel comfortable on day one. That and I figured I would build something that is my
          own in the stack that I enjoy the most. I have a little database set up for when people contact me just to
          showcase that I am capable of creating and using needed api routes, I used tailwind because it has become the
          defacto standard while retaining most of the features found in CSS, but I do fall back to CSS when I need to
          build something that requires a little bit more complicated (the image carousel), I use resend to immediately
          send a thank you email to those who reach out to me, and I use the niceties provided by Next.js and the team
          over at vercel to deliver a robust and extremely fast experience.
        </p>
        <p>
          While I know that there is not always a need for a framework and while some of my developer peers would also
          argue that there are better frameworks for any given purpose when building out a tech stack I find it
          incredibly important to remain uniform. It makes bringing on members much easier and makes creating
          documentation a much less painful experience. Whatever you choose for your projects just make sure that you
          enjoy it! Personally, I think there is great value in learning as much as possible, but it can be just as
          powerful to learn one thing as best as you possibly can before moving on to the next.
        </p>
      </>
    </ProjectPage>
  );
}
