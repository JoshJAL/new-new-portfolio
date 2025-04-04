import ProjectCard from '@/components/projects/ProjectCard';
import Me from '@/public/me.jpeg';
import ThreeD from '@/public/projects/3D-portfolio.png';
import AnissasSoaps from '@/public/projects/anissas-soaps.webp';
import BigNick from '@/public/projects/big-nick.webp';
import CoastalCrumb from '@/public/projects/coastal-crumb.jpg';
import Modern from '@/public/projects/cSharp.jpg';
import Joshua from '@/public/projects/happyHeadshot.jpg';
import Michael from '@/public/projects/Michael-Levine.jpg';
import Monster from '@/public/projects/monster_logo_white.webp';
import Msk from '@/public/projects/msk.png';
import Omar from '@/public/projects/o-almanzar.webp';
import Scribble from '@/public/projects/scribble.jpg';
import Snake from '@/public/projects/snake.jpg';
import ThingsIUse from '@/public/projects/things-i-use.jpg';

import type { Project } from '@/types/project';

export default function Page() {
  const projects: Project[] = [
    {
      codeHref: 'https://github.com/JoshJAL/new-new-portfolio',
      description: 'This portfolio website, this is the third or fourth iteration of my portfolio.',
      href: '/projects/portfolio',
      image: Me,
      title: 'Portfolio'
    },
    {
      backgroundColor: 'bg-black p-3',
      description:
        'As the lead developer for Monster Transmission & Performance I built out all internal tooling and aided in the development and design of the public facing website.',
      href: '/projects/monster',
      image: Monster,
      projectHref: 'https://www.monstertransmission.com',
      title: 'Monster Transmission & Performance'
    },
    {
      description: 'Sourdough bakery website, genuinely delicious products. Check them out!',
      href: '/projects/coastal-crumb',
      image: CoastalCrumb,
      projectHref: 'https://www.coastalcrumbllc.com',
      title: 'Coastal Crumb'
    },
    {
      description:
        "The goal of this therapy is to unwind postural patterns and allow the body to move freely without restriction through all planes of motion. If you're interested in learning more, or scheduling an appointment, click the link below!",
      href: '/projects/msk',
      image: Msk,
      projectHref: 'https://www.mskstructuraltherapy.com/',
      title: 'MSK Structural Therapy'
    },
    {
      description:
        'A car wash business that is just getting started. The client has yet to purchase their domain, but the site is fully functional and ready to go.',
      href: '/projects/big-nick',
      image: BigNick,
      projectHref: 'https://big-nick.vercel.app/',
      title: "Big Nick's Car Wash"
    },
    {
      codeHref: 'https://github.com/JoshJAL/astro-portfolio-rebuild',
      description:
        "My portfolio built with Astro, this was the iteration before this current one. I am still very proud of it. It features a light and a dark mode. Something that I don't think is necessary in most applications, but I wanted to try it out.",
      href: '/projects/astro-portfolio',
      image: Joshua,
      projectHref: 'https://astro.joshualevine.me',
      title: 'Astro Portfolio'
    },
    {
      description: 'A local soap business, the soaps are made with all natural ingredients and are made by hand!',
      href: '/projects/anissas-soaps',
      image: AnissasSoaps,
      projectHref: 'https://www.anissasoaps.com/',
      title: "Anissa's Soaps"
    },
    {
      description:
        'A Long Island Personal Injury lawyer. He needed a full website overhaul and he seems to be happy with the results!',
      href: '/projects/omar-almanzar-paramio',
      image: Omar,
      projectHref: 'https://www.almanzarlaw.com/',
      title: 'Almanzar-Paramio Law, LLC'
    },
    {
      codeHref: 'https://github.com/JoshJAL/3d-portfolio',
      description:
        'My portfolio but using 3D assets using the 3JS library. I just wanted to play around with 3D objects in the browser and learn something new.',
      href: '/projects/3d-portfolio',
      image: ThreeD,
      projectHref: 'https://3dportfolio.joshualevine.me/',
      title: '3D Portfolio'
    },
    {
      codeHref: 'https://github.com/JoshJAL/resume-cover-letter-generator/tree/main',
      description:
        'A very basic resume and cover letter generator that I built while applying for jobs. A couple of friends and I were applying at around the same time and we got really tired of either making a new resume or cover letter for each job, so I built something to speed up the process a little bit.',
      href: '/projects/resume-cover-letter-generator',
      image: Scribble,
      projectHref: 'https://resume-cover-letter-generator.vercel.app/',
      title: 'Resume and Cover Letter Generator'
    },
    {
      description:
        "The US sales arm for a Vietnam based apparel manufacturer. They cover men's and women's wearing apparel of all fabrication and makes.",
      href: '/projects/levine-apparel',
      image: Michael,
      projectHref: 'https://apparel-solution.com/',
      title: 'Levine Apparel Solutions'
    },
    {
      codeHref: 'https://github.com/JoshJAL/ModernUICSharp',
      description: 'A modern looking UI design made with C#.',
      href: '/projects/modern-ui',
      image: Modern,
      title: 'Modern UI Design'
    },
    {
      codeHref: 'https://github.com/JoshJAL/what-i-use',
      description:
        'I wanted to play with Astro a little bit more so I built this website to show off the things I use on a daily basis. It features a light and a dark mode just like my former portfolio.',
      href: '/projects/what-i-use',
      image: ThingsIUse,
      projectHref: 'https://tiu.joshualevine.me',
      title: 'Things I Use'
    },
    {
      codeHref: 'https://github.com/JoshJAL/JavaSnake',
      description:
        'To practice some Java while I was learning the language I decided to build Snake the game. It was a lot of fun and nice to see the game come together.',
      href: '/projects/snake',
      image: Snake,
      title: 'Java Snake'
    }
  ];

  return (
    <article className='flex w-full flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p>
        These are most, if not all of the projects that I have worked on. I can&apos;t provide the source code for all
        of my projects since they were built for work or clients, but if you care to learn more or visit the public
        facing portion of the project, feel free to click the links and look around!
      </p>
      <p>
        While most of my projects are private because I wouldn&apos;t want to expose my clients code. My GitHub
        portfolio currently features 90 projects and counting with thouands of commits per year.
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </article>
  );
}
