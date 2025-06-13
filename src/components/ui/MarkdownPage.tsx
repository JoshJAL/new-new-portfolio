import BackToTopButton from '@/components/ui/BackToTopButton';
import BreadCrumb from '@/components/ui/BreadCrumb';
import InfoCard from '@/components/ui/InfoCard';
import Image from 'next/image';

import type { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  heading: string;
  image: StaticImageData;
}

export default function MarkdownPage({ children, heading, image }: Props) {
  return (
    <article>
      <BreadCrumb link={{ label: 'Guides', href: '/guides' }} current={heading} />
      <InfoCard heading={heading}>
        <section>
          <div className='relative mx-auto w-fit overflow-hidden rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)]'>
            <div className='pop absolute inset-0 z-10 bg-black/10' />
            <Image
              loading='eager'
              className='h-full w-full bg-white'
              placeholder='blur'
              src={image}
              alt={heading}
              height={250}
              width={250}
              quality={60}
            />
          </div>
          {children}
        </section>
      </InfoCard>
      <BackToTopButton />
    </article>
  );
}
