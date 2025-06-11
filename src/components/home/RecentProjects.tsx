import InfoCard from '@/components/ui/InfoCard';
import StyledLink from '@/components/ui/StyledLink';
import Technology from '@/components/ui/Technology';
import GlassButtonLink from '@/components/ui/GlassButtonLink';

import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiClerk, SiResend, SiShopify, SiSqlite, SiStripe } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function RecentProjects() {
  const ez_funcs: Tech[] = [
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  const monster: Tech[] = [
    {
      borderColor: 'border-purple-800/20',
      color: 'bg-purple-800/50',
      icon: <BsFiletypeCss className='h-5 w-5' />,
      label: 'CSS'
    },
    {
      borderColor: 'border-yellow-300/20',
      color: 'bg-yellow-300/50',
      icon: <BiLogoJavascript className='h-5 w-5' />,
      label: 'Javascript',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='h-5 w-5' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-lime-400/20',
      color: 'bg-lime-400/50',
      icon: <SiShopify className='h-5 w-5' />,
      label: 'Shopify',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='h-5 w-5' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  const coastal: Tech[] = [
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-gradient-to-r from-purple-600/50 to-blue-500/50',
      icon: <SiClerk className='h-5 w-5' />,
      label: 'Clerk'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <RiNextjsLine className='h-5 w-5' />,
      label: 'Next.js'
    },
    {
      borderColor: 'border-black/20',
      color: 'bg-black/50',
      icon: <SiResend className='h-5 w-5' />,
      label: 'Resend'
    },
    {
      borderColor: 'border-indigo-600/20',
      color: 'bg-indigo-600/50',
      icon: <SiStripe className='h-5 w-5' />,
      label: 'Stripe'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='h-5 w-5' />,
      label: 'SQLite'
    },
    {
      borderColor: 'border-cyan-400/20',
      color: 'bg-cyan-400/50',
      icon: <RiTailwindCssFill className='h-5 w-5' />,
      label: 'Tailwind',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-500/20',
      color: 'bg-blue-500/50',
      icon: <BiLogoTypescript className='h-5 w-5' />,
      label: 'TypeScript'
    }
  ];

  const decoder: Tech[] = [
    {
      borderColor: 'border-purple-800/20',
      color: 'bg-purple-800/50',
      icon: <BsFiletypeCss className='h-5 w-5' />,
      label: 'CSS'
    },
    {
      borderColor: 'border-yellow-300/20',
      color: 'bg-yellow-300/50',
      icon: <BiLogoJavascript className='h-5 w-5' />,
      label: 'Javascript',
      textColor: 'text-black'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <FaReact className='h-5 w-5' />,
      label: 'React Native'
    },
    {
      borderColor: 'border-blue-400/20',
      color: 'bg-blue-400/50',
      icon: <SiSqlite className='h-5 w-5' />,
      label: 'SQLite'
    }
  ];

  return (
    <InfoCard id='projects' heading={'Recent Projects'}>
      <section className='flex w-full flex-col gap-3'>
        <p>
          I&apos;ve been doing this a number of years now, so as you can imagine I have tons of projects that I have
          worked on, but I will keep this to the most recent and notable three. If you care to look at more of my
          projects and in more detail feel free to visit my &quot;
          <StyledLink colorSwap prefetch href='/projects'>
            Projects
          </StyledLink>
          &quot; page!
        </p>
        <InfoCard colorSwap heading={'ez-funcs'}>
          <div className='flex w-full flex-col gap-3'>
            <p>
              A simple npm package that contains a list of utility functions that I use over a variety of projects both
              personally and professionally.
            </p>
            <ul className='list-inside list-disc'>
              <li>Keep package size small with no dependencies.</li>
              <li>
                Source code provided if user does not want to install entire project they can simply copy and paste.
              </li>
              <li>Well documented with examples and explanations of code.</li>
            </ul>
            <InfoCard heading={'Technologies'}>
              <div className='flex w-full flex-wrap gap-3'>
                {ez_funcs.map((t) => (
                  <Technology tech={t} key={t.label} />
                ))}
              </div>
            </InfoCard>
            <GlassButtonLink prefetch={false} href='https://www.npmjs.com/package/ez-funcs' target='_blank'>
              Project Link
            </GlassButtonLink>
          </div>
        </InfoCard>
        <InfoCard colorSwap heading={'Monster Transmission & Performance'}>
          <div className='flex w-full flex-col gap-3'>
            <p>
              I am the lead developer for Monster Transmission & Performance. I have built all of our internal tooling
              and helped develop our front-end using Shopify from the ground up. I also aid our sister companies with
              their development needs.
            </p>
            <ul className='list-inside list-disc'>
              <li>Full Stack e-commerce platform for transmissions, engines, and torque converters.</li>
              <li>Organized and optimized over 6,000 products. Narrowed down to top selling 200.</li>
              <li>
                Year, make, and model look up to help customers find their applicable transmissions and engines spanning
                over 6,000 different vehicle makes.
              </li>
              <li>Built tech stack from the ground up.</li>
              <li>
                Created npm package to reduce boilerplate for internal and external tools. Functions with React and
                React Server Components. Can be used in Next.js as well.
              </li>
            </ul>
            <InfoCard heading={'Technologies'}>
              <div className='flex w-full flex-wrap gap-3'>
                {monster.map((t) => (
                  <Technology tech={t} key={t.label} />
                ))}
              </div>
            </InfoCard>
            <GlassButtonLink prefetch={false} href='https://monstertransmission.com/' target='_blank'>
              Project Link
            </GlassButtonLink>
          </div>
        </InfoCard>
        <InfoCard colorSwap heading={'Coastal Crumb'}>
          <div className='flex w-full flex-col gap-3'>
            <p>
              A local bakery opened up and asked me to make their website and set up their ordering and subscription
              system. I set up their front-end and back-end systems and allowed them to receive payments using stripe.
              They are happy and thriving. If you like sourdough I would highly recommend placing an order!
            </p>
            <ul className='list-inside list-disc'>
              <li>
                Full Stack e-commerce platform for bakery. Created front-end for placing orders as well as contacting
                customers for confirmations.
              </li>
              <li>Connected Stripe for payments for orders and subscriptions.</li>
              <li>
                Created backend system for managing orders and updating customers about the status of their order.
              </li>
              <li>Created image uploading system for custom and editable images of products.</li>
              <li>Allow users to sign in to manage their own subscription status.</li>
            </ul>
            <InfoCard heading={'Technologies'}>
              <div className='flex w-full flex-wrap gap-3'>
                {coastal.map((t) => (
                  <Technology tech={t} key={t.label} />
                ))}
              </div>
            </InfoCard>
            <GlassButtonLink prefetch={false} href='https://coastalcrumbllc.com/' target='_blank'>
              Project Link
            </GlassButtonLink>
          </div>
        </InfoCard>
        <InfoCard colorSwap heading={'Transmission Decoder App'}>
          <div className='flex w-full flex-col gap-3'>
            <p>
              This one is no longer available on the app store, but it was a really cool iOS app that would allow you to
              be able to check the transmission and engine of over 6,000 vehicles, you could save previous searches and
              it would suggest you products that were related to your current search.
            </p>
            <ul className='list-inside list-disc'>
              <li>
                Year, make, and model search that would return current engine and transmission of over 6,000 vehicles.
              </li>
              <li>Suggested products of multiple shops.</li>
              <li>Allowed users to save any number of searches.</li>
            </ul>
            <InfoCard heading={'Technologies'}>
              <div className='flex w-full flex-wrap gap-3'>
                {decoder.map((t) => (
                  <Technology tech={t} key={t.label} />
                ))}
              </div>
            </InfoCard>
          </div>
        </InfoCard>
      </section>
    </InfoCard>
  );
}
