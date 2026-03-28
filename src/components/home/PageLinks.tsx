import GlassButtonLink from '../ui/GlassButtonLink';

export default function PageLinks() {
  return (
    <div className='bg-cerulean/50 border-cerulean/20 pop glass-edge flex w-full flex-col flex-wrap items-center justify-center gap-3 rounded-2xl border p-3 text-black liquid-blur md:flex-row'>
      <GlassButtonLink additionalClasses='w-full md:w-fit' href='#projects' prefetch={false}>
        Projects
      </GlassButtonLink>
      <GlassButtonLink additionalClasses='w-full md:w-fit' colorSwap href='#experience' prefetch={false}>
        Experience
      </GlassButtonLink>
      <GlassButtonLink additionalClasses='w-full md:w-fit' colorSwap4 href='#freelance' prefetch={false}>
        Freelance
      </GlassButtonLink>
      <GlassButtonLink additionalClasses='w-full md:w-fit' colorSwap3 href='#education' prefetch={false}>
        Education
      </GlassButtonLink>
    </div>
  );
}
