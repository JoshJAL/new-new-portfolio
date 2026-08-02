import ProjectPage from '@/components/projects/ProjectPage';
import CoastalCrumb from '@/public/projects/coastal-crumb.jpg';

import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiResend, SiSqlite, SiStripe } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-linear-to-r from-purple-600/50 to-blue-500/50',
      icon: <SiClerk className='size-5' />,
      label: 'Clerk'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='size-5' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <SiResend className='size-5' />,
      label: 'Resend'
    },
    {
      borderColor: 'border-indigo-600/20',
      color: 'bg-indigo-600/50',
      icon: <SiStripe className='size-5' />,
      label: 'Stripe'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='size-5' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='size-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-5' />,
      label: 'TypeScript'
    }
  ];

  return (
    <ProjectPage
      href='https://coastalcrumbllc.com'
      title='Coastal Crumb'
      image={CoastalCrumb}
      imagePadding='bg-white'
      tech={tech}
    >
      <>
        <p>
          Coastal Crumb is a local micro-bakery that I love. The owner, Allie Phelps, approached me and asked if I could
          build her shop for her and I never turn down an opportunity to help support local small businesses. She has a
          passion for sourdough and really knows what she is doing. I highly recommend checking out this shop and not
          just because I built it.
        </p>
        <p>
          I had a blast building out this shop for her. I built both her front-end and her back-end to allow her to
          manager her orders and subscriptions seamlessly. I used Stripe to allow her to collect payments and I used
          Clerk to allow for her users to subscribe for her monthly bread boxes and manage their own subscriptions. With
          automated emails being sent out using upon a completed order, this shop is fully functional and ready to go!
        </p>
      </>
    </ProjectPage>
  );
}
