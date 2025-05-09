import ButtonLink from '@/components/ui/ButtonLink';

export default function PageLinks() {
  return (
    <section className='bg-davys-gray shadow-[3px_3px_0px_rgba(0,0,0,1)] flex w-full flex-col flex-wrap items-center justify-center gap-3 rounded-lg border-2 border-white p-3 text-black md:flex-row'>
      <ButtonLink additionalClasses='w-full md:w-fit' href='#education' prefetch={false}>
        Education
      </ButtonLink>
      <ButtonLink additionalClasses='w-full md:w-fit' colorSwap4 href='#hobbies' prefetch={false}>
        Hobbies
      </ButtonLink>
      <ButtonLink additionalClasses='w-full md:w-fit' colorSwap2 href='#work' prefetch={false}>
        Work
      </ButtonLink>
    </section>
  );
}
