import BackToTopButton from '@/components/ui/BackToTopButton';
import BreadCrumb from '@/components/ui/BreadCrumb';
import InfoCard from '@/components/ui/InfoCard';
import TiltCard from '@/components/ui/TiltCard';
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
          <TiltCard className='mx-auto w-fit' tiltMax={12} glareOpacity={0.25}>
            <div className='relative overflow-hidden rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)]'>
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
          </TiltCard>
          {children}
        </section>
      </InfoCard>
      <BackToTopButton />
    </article>
  );
}
