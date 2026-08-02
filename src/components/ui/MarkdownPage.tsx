import BackToTopButton from './BackToTopButton';
import BreadCrumb from './BreadCrumb';
import GlassPanel from './GlassPanel';
import TiltCard from './TiltCard';
import Image from 'next/image';

import type { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  heading: string;
  image: StaticImageData;
}

export default function MarkdownPage({ children, heading, image }: Props) {
  return (
    <article className='flex w-full flex-col gap-6'>
      <BreadCrumb link={{ label: 'Guides', href: '/guides' }} current={heading} />
      <h1>{heading}</h1>
      <TiltCard className='mx-auto w-fit' tiltMax={12} glareOpacity={0.25}>
        <div className='relative overflow-hidden rounded-xl media-shadow'>
          <div className='pop absolute inset-0 z-10 bg-black/10' />
          <Image
            loading='eager'
            className='size-full bg-white'
            placeholder='blur'
            src={image}
            alt={heading}
            height={250}
            width={250}
            quality={60}
          />
        </div>
      </TiltCard>
      <GlassPanel tint='caribbean'>
        <section>{children}</section>
      </GlassPanel>
      <BackToTopButton />
    </article>
  );
}
