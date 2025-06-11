import LoadingSpinner from '@/components/loading/LoadingSpinner';
import BreadCrumb from '@/components/ui/BreadCrumb';
import GlassButtonLink from '@/components/ui/GlassButtonLink';
import ImageSlider from '@/components/ui/ImageSlider';
import InfoCard from '@/components/ui/InfoCard';

import { Suspense } from 'react';

import type { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  images: { src: StaticImageData; alt: string }[];
  instagramLink: string;
  title: string;
}

export default function PhotographyPage({ children, images, instagramLink, title }: Props) {
  const link = {
    label: 'Photography',
    href: '/photography'
  };

  return (
    <div className='flex w-full flex-col gap-5'>
      <BreadCrumb current={title} link={link} />
      <InfoCard heading={title}>
        <article className='flex w-full flex-col gap-5'>
          <Suspense fallback={<LoadingSpinner />}>
            <ImageSlider autoScroll images={images} />
          </Suspense>
          <section className='flex w-full flex-col gap-3'>{children}</section>
          <GlassButtonLink prefetch={false} target='_blank' href={instagramLink}>
            Instagram Post
          </GlassButtonLink>
        </article>
      </InfoCard>
    </div>
  );
}
