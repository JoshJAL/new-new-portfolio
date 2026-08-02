import GlassButtonLink from '@/components/ui/GlassButtonLink';
import GlassPanel from '@/components/ui/GlassPanel';
import Image from 'next/image';
import Me from '@/public/me.jpeg';
import TiltCard from '@/components/ui/TiltCard';

const TOOLS = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'C#', 'Java', 'Lua', 'SQL'];

export default function Intro() {
  return (
    <section className='grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <p className='text-sm font-medium tracking-widest text-champagne uppercase'>Web &amp; software developer</p>
          <h1 className='font-display text-5xl tracking-tight md:text-7xl'>
            I&apos;m Joshua Levine, and I haven&apos;t{' '}
            <span className='bg-linear-to-r from-naples-yellow to-bittersweet bg-clip-text text-transparent'>
              worked
            </span>{' '}
            a day in four years.
          </h1>
        </div>
        <GlassPanel className='flex flex-col gap-4'>
          <p>
            I left law school for a coding bootcamp and never looked back &mdash; turns out the &quot;do what you
            love&quot; people were onto something. These days I lead development at Monster Transmission &amp;
            Performance and build sites and tools for small businesses on the side.
          </p>
          <p>Poke around and get to know me a little bit. This first page is basically my resume, because it is.</p>
          <ul className='flex flex-wrap gap-2'>
            {TOOLS.map((tool) => (
              <li key={tool} className='rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs'>
                {tool}
              </li>
            ))}
          </ul>
        </GlassPanel>
        <div className='flex flex-wrap gap-3'>
          <GlassButtonLink fit prefetch href='/projects'>
            See my work
          </GlassButtonLink>
          <GlassButtonLink fit colorSwap2 prefetch href='/contact'>
            Get in touch
          </GlassButtonLink>
        </div>
      </div>
      <TiltCard className='mx-auto w-fit' tiltMax={12} glareOpacity={0.25}>
        <div className='relative overflow-hidden rounded-xl media-shadow'>
          <div className='pop absolute inset-0 z-10 bg-black/10' />
          <Image
            quality={60}
            src={Me}
            placeholder='blur'
            alt='Joshua Levine'
            className='relative z-0 h-auto w-80'
            loading='eager'
          />
        </div>
      </TiltCard>
    </section>
  );
}
