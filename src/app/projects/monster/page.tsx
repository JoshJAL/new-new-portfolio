import ProjectPage from '@/components/projects/ProjectPage';
import Monster from '@/public/projects/monster_logo_white.webp';
import StyledLink from '@/components/ui/StyledLink';

import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiResend, SiShopify, SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      borderColor: 'border-purple-600/20',
      color: 'bg-purple-800/50',
      icon: <BsFiletypeCss className='size-5' />,
      label: 'CSS'
    },
    {
      borderColor: 'border-yellow-300/20',
      color: 'bg-yellow-300/50',
      icon: <BiLogoJavascript className='size-5' />,
      label: 'Javascript',
      textColor: 'text-black'
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
      borderColor: 'border-lime-400/20',
      color: 'bg-lime-400/50',
      icon: <SiShopify className='size-5' />,
      label: 'Shopify',
      textColor: 'text-black'
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
      href='https://www.monstertransmission.com'
      image={Monster}
      imagePadding='p-3'
      imageBackgroundColor='bg-black'
      tech={tech}
      title='Monster Transmission & Performance'
    >
      <>
        <p>
          As the Lead Developer at Monster Transmission & Performance, I built out and organized the tech stack from the
          ground up. As you can imagine most of the tooling is internal and kept private, but I can still discuss it
          here I just cannot provide links to the tools themselves or to the source code.
        </p>
        <p>
          Internally I built and worked on over 40 different projects. These projects varied from automations, CRM
          integrations, customer contacts, inventory management systems, order tracking systems, ticketing systems,
          accounting software, iOS apps, simple scripting, and consumer-facing products. I am very proud of all that I
          accomplished at Monster as well as the work I did for Monster&apos;s sister company BDDiesel.
        </p>
        <p>
          One of the major projects that I worked on and is linked below is the migration from Shift 4 Shop to Shopify.
          We moved 6,000 products and narrowed them down to the top 200, completely overhauled the front-end experience
          for the user, and rolled out order tracking systems in the backend with nearly no hiccups or downtime.
        </p>
        <p>
          While there I also created an npm package to reduce boiler plate across the projects. It functions with React
          and React server components. It contains a plethora of styled components (both server and client components)
          as well as a handful of utility functions that are used across all the projects. The package can be viewed{' '}
          <StyledLink href='https://www.npmjs.com/package/burnout-components' target='_blank'>
            here
          </StyledLink>
          .
        </p>
      </>
    </ProjectPage>
  );
}
