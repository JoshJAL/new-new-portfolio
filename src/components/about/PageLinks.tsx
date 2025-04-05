import ButtonLink from '@/components/ui/ButtonLink';

export default function PageLinks() {
  return (
    <section className='bg-dark-purple flex w-full flex-col flex-wrap items-center justify-center gap-3 rounded-lg p-3 text-white shadow-[3px_3px_0px_rgba(255,255,255,1)] md:flex-row'>
      <ButtonLink additionalClasses='w-full md:w-fit' href='#education' prefetch={false}>
        Education
      </ButtonLink>
      <ButtonLink additionalClasses='w-full md:w-fit' colorSwap4 href='#hobbies' prefetch={false}>
        Hobbies
      </ButtonLink>
      <ButtonLink additionalClasses='w-full md:w-fit' colorSwap3 href='#work' prefetch={false}>
        Work
      </ButtonLink>
    </section>
  );
}
