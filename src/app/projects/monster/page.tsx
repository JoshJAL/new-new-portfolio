import ProjectPage from '@/components/projects/ProjectPage';
import Monster from '@/public/projects/monster_logo_white.webp';

import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsFiletypeCss } from 'react-icons/bs';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiResend, SiShopify, SiSqlite } from 'react-icons/si';

import type { Tech } from '@/types/tech';

export default function Page() {
  const tech: Tech[] = [
    {
      color: 'bg-purple-800',
      icon: <BsFiletypeCss className='h-5 w-5' />,
      label: 'CSS'
    },
    {
      color: 'bg-yellow-300',
      icon: <BiLogoJavascript className='h-5 w-5' />,
      label: 'Javascript',
      textColor: 'text-black'
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
      color: 'bg-lime-400',
      icon: <SiShopify className='h-5 w-5' />,
      label: 'Shopify',
      textColor: 'text-black'
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
    <ProjectPage
      href='https://www.monstertransmission.com'
      image={Monster}
      imagePadding='p-3'
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
          Internally I built and worked on over 40 different projects and counting. These projects are varied from
          automations, CRM integrations, customer contacts, inventory management systems, order tracking systems,
          ticketing systems, accounting softwares, iOS apps, simple scripting, and of course all of the consumer facing
          products as well. I am very proud of all that I have accomplished at Monster as well as all the work that I
          have done for Monster&apos;s sister company BDDiesel.
        </p>
        <p>
          One of the major projects that I worked on and is linked below is the migration from Shift 4 Shop to Shopify.
          We moved 6,000 products and narrowed them down to the top 200, completely overhauled the front-end experience
          for the user, and rolled out order tracking systems in the backend with nearly no hiccups or downtime.
        </p>
      </>
    </ProjectPage>
  );
}
