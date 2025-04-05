import ButtonLink from '@/components/ui/ButtonLink';

export default function PageLinks() {
  return (
    <section className='bg-desert-sand flex w-full flex-col flex-wrap items-center justify-center gap-3 rounded-lg p-3 text-black shadow-[3px_3px_0px_rgba(255,255,255,1)] md:flex-row'>
      <ButtonLink additionalClasses='w-full md:w-fit' href='#projects' prefetch={false}>
        Projects
      </ButtonLink>
      <ButtonLink additionalClasses='w-full md:w-fit' colorSwap4 href='#experience' prefetch={false}>
        Experience
      </ButtonLink>
      <ButtonLink additionalClasses='w-full md:w-fit' colorSwap3 href='#education' prefetch={false}>
        Education
      </ButtonLink>
    </section>
  );
}
