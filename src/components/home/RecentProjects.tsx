import GlassButtonLink from '@/components/ui/GlassButtonLink';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';
import StyledLink from '@/components/ui/StyledLink';
import Technology from '@/components/ui/Technology';

import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiResend, SiShopify, SiSqlite, SiStripe } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function RecentProjects() {
  const ezFuncs: Tech[] = [
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-4' />,
      label: 'TypeScript'
    }
  ];

  const monster: Tech[] = [
    {
      borderColor: 'border-purple-800/20',
      color: 'bg-purple-800/50',
      icon: <BsFiletypeCss className='size-4' />,
      label: 'CSS'
    },
    {
      borderColor: 'border-yellow-300/20',
      color: 'bg-yellow-300/50',
      icon: <BiLogoJavascript className='size-4' />,
      label: 'Javascript',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='size-4' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-lime-400/20',
      color: 'bg-lime-400/50',
      icon: <SiShopify className='size-4' />,
      label: 'Shopify',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='size-4' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='size-4' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-4' />,
      label: 'TypeScript'
    }
  ];

  const coastal: Tech[] = [
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-linear-to-r from-purple-600/50 to-blue-500/50',
      icon: <SiClerk className='size-4' />,
      label: 'Clerk'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='size-4' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <SiResend className='size-4' />,
      label: 'Resend'
    },
    {
      borderColor: 'border-indigo-600/20',
      color: 'bg-indigo-600/50',
      icon: <SiStripe className='size-4' />,
      label: 'Stripe'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='size-4' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='size-4' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='size-4' />,
      label: 'TypeScript'
    }
  ];

  const decoder: Tech[] = [
    {
      borderColor: 'border-purple-800/20',
      color: 'bg-purple-800/50',
      icon: <BsFiletypeCss className='size-4' />,
      label: 'CSS'
    },
    {
      borderColor: 'border-yellow-300/20',
      color: 'bg-yellow-300/50',
      icon: <BiLogoJavascript className='size-4' />,
      label: 'Javascript',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <FaReact className='size-4' />,
      label: 'React Native'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='size-4' />,
      label: 'SQLite'
    }
  ];

  return (
    <section className='flex w-full flex-col gap-6'>
      <SectionHeading id='projects'>Recent Projects</SectionHeading>
      <p className='text-desert-sand'>
        I&apos;ve been doing this a number of years now, so as you can imagine I have tons of projects that I have
        worked on, but I will keep this to the most recent and notable few. If you care to look at more of my projects
        and in more detail feel free to visit my{' '}
        <StyledLink colorSwap prefetch href='/projects'>
          Projects
        </StyledLink>{' '}
        page!
      </p>
      <GlassPanel tint='cerulean' className='flex flex-col gap-3'>
        <h3>ez-funcs</h3>
        <div className='flex flex-wrap gap-2'>
          {ezFuncs.map((t) => (
            <Technology tech={t} key={t.label} />
          ))}
        </div>
        <p>
          A simple npm package that contains a list of utility functions that I use over a variety of projects both
          personally and professionally.
        </p>
        <ul className='list-inside list-disc'>
          <li>Keep package size small with no dependencies.</li>
          <li>Source code provided if user does not want to install entire project they can simply copy and paste.</li>
          <li>Well documented with examples and explanations of code.</li>
        </ul>
        <div className='flex flex-wrap gap-3'>
          <GlassButtonLink fit prefetch={false} href='https://www.npmjs.com/package/ez-funcs' target='_blank'>
            View on npm
          </GlassButtonLink>
        </div>
      </GlassPanel>
      <GlassPanel tint='cerulean' className='flex flex-col gap-3'>
        <h3>Monster Transmission &amp; Performance</h3>
        <div className='flex flex-wrap gap-2'>
          {monster.map((t) => (
            <Technology tech={t} key={t.label} />
          ))}
        </div>
        <p>
          While serving as lead developer at Monster Transmission &amp; Performance, I built its internal tooling,
          helped develop its consumer-facing Shopify website from the ground up, and supported sister companies with
          their development needs.
        </p>
        <ul className='list-inside list-disc'>
          <li>Full Stack e-commerce platform for transmissions, engines, and torque converters.</li>
          <li>Organized and optimized over 6,000 products. Narrowed down to top selling 200.</li>
          <li>
            Year, make, and model lookup to help customers find applicable transmissions and engines across more than
            6,000 vehicles.
          </li>
          <li>Built tech stack from the ground up.</li>
          <li>
            Created npm package to reduce boilerplate for internal and external tools. Functions with React and React
            Server Components. Can be used in Next.js as well.
          </li>
        </ul>
        <div className='flex flex-wrap gap-3'>
          <GlassButtonLink fit prefetch={false} href='https://monstertransmission.com/' target='_blank'>
            Visit monstertransmission.com
          </GlassButtonLink>
        </div>
      </GlassPanel>
      <GlassPanel tint='cerulean' className='flex flex-col gap-3'>
        <h3>Coastal Crumb</h3>
        <div className='flex flex-wrap gap-2'>
          {coastal.map((t) => (
            <Technology tech={t} key={t.label} />
          ))}
        </div>
        <p>
          A local bakery opened up and asked me to make their website and set up their ordering and subscription system.
          I set up their front-end and back-end systems and allowed them to receive payments using stripe. They are
          happy and thriving. If you like sourdough I would highly recommend placing an order!
        </p>
        <ul className='list-inside list-disc'>
          <li>
            Full Stack e-commerce platform for bakery. Created front-end for placing orders as well as contacting
            customers for confirmations.
          </li>
          <li>Connected Stripe for payments for orders and subscriptions.</li>
          <li>Created backend system for managing orders and updating customers about the status of their order.</li>
          <li>Created image uploading system for custom and editable images of products.</li>
          <li>Allow users to sign in to manage their own subscription status.</li>
        </ul>
        <div className='flex flex-wrap gap-3'>
          <GlassButtonLink fit prefetch={false} href='https://coastalcrumbllc.com/' target='_blank'>
            Visit coastalcrumbllc.com
          </GlassButtonLink>
        </div>
      </GlassPanel>
      <GlassPanel tint='cerulean' className='flex flex-col gap-3'>
        <h3>Transmission Decoder App</h3>
        <div className='flex flex-wrap gap-2'>
          {decoder.map((t) => (
            <Technology tech={t} key={t.label} />
          ))}
        </div>
        <p>
          This iOS application identified engines and transmissions across more than 6,000 vehicles using year, make,
          and model searches. Users could also save previous searches and receive relevant product suggestions.
        </p>
        <ul className='list-inside list-disc'>
          <li>
            Year, make, and model search that returned engine and transmission details for more than 6,000 vehicles.
          </li>
          <li>Suggested products of multiple shops.</li>
          <li>Allowed users to save any number of searches.</li>
        </ul>
      </GlassPanel>
    </section>
  );
}
