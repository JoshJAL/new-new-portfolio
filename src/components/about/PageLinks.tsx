import GlassButtonLink from '@/components/ui/GlassButtonLink';

export default function PageLinks() {
  return (
    <div className='bg-davys-gray/50 border-davys-gray/20 pop glass-edge flex w-full flex-col flex-wrap items-center justify-center gap-3 rounded-2xl border p-3 text-black liquid-blur md:flex-row'>
      <GlassButtonLink additionalClasses='w-full md:w-fit' href='#education' prefetch={false}>
        Education
      </GlassButtonLink>
      <GlassButtonLink additionalClasses='w-full md:w-fit' colorSwap4 href='#hobbies' prefetch={false}>
        Hobbies
      </GlassButtonLink>
      <GlassButtonLink additionalClasses='w-full md:w-fit' colorSwap2 href='#work' prefetch={false}>
        Work
      </GlassButtonLink>
    </div>
  );
}
