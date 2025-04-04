import LoadingSpinner from '@/components/loading/LoadingSpinner';
import ButtonLink from '@/components/ui/ButtonLink';
import ImageSlider from '@/components/ui/ImageSlider';
import InfoCard from '@/components/ui/InfoCard';

import {
  IMG_0192,
  IMG_0193,
  IMG_0208,
  IMG_0220,
  IMG_0244,
  IMG_0272,
  IMG_0273,
  IMG_0279,
  IMG_0284,
  IMG_0286,
  IMG_0291,
  IMG_0298,
  IMG_0300,
  IMG_0308,
  IMG_0312,
  IMG_0316,
  IMG_0327,
  IMG_0330,
  IMG_0333,
  IMG_0349,
  IMG_0351,
  IMG_0352,
  IMG_0375,
  IMG_0376,
  IMG_0378,
  IMG_0387,
  IMG_0395,
  IMG_0398,
  IMG_0399,
  IMG_0434,
  IMG_2249
} from '@/photography/mar-2025';

import { Suspense } from 'react';

import type { StaticImageData } from 'next/image';

export default function Page() {
  const images: { src: StaticImageData; alt: string }[] = [
    { src: IMG_0192, alt: 'Image 0192' },
    { src: IMG_0193, alt: 'Image 0193' },
    { src: IMG_0208, alt: 'Image 0208' },
    { src: IMG_0220, alt: 'Image 0220' },
    { src: IMG_0244, alt: 'Image 0244' },
    { src: IMG_0272, alt: 'Image 0272' },
    { src: IMG_0273, alt: 'Image 0273' },
    { src: IMG_0279, alt: 'Image 0279' },
    { src: IMG_0284, alt: 'Image 0284' },
    { src: IMG_0286, alt: 'Image 0286' },
    { src: IMG_0291, alt: 'Image 0291' },
    { src: IMG_0298, alt: 'Image 0298' },
    { src: IMG_0300, alt: 'Image 0300' },
    { src: IMG_0308, alt: 'Image 0308' },
    { src: IMG_0312, alt: 'Image 0312' },
    { src: IMG_0316, alt: 'Image 0316' },
    { src: IMG_0327, alt: 'Image 0327' },
    { src: IMG_0330, alt: 'Image 0330' },
    { src: IMG_0333, alt: 'Image 0333' },
    { src: IMG_0349, alt: 'Image 0349' },
    { src: IMG_0351, alt: 'Image 0351' },
    { src: IMG_0352, alt: 'Image 0352' },
    { src: IMG_0375, alt: 'Image 0375' },
    { src: IMG_0376, alt: 'Image 0376' },
    { src: IMG_0378, alt: 'Image 0378' },
    { src: IMG_0387, alt: 'Image 0387' },
    { src: IMG_0395, alt: 'Image 0395' },
    { src: IMG_0398, alt: 'Image 0398' },
    { src: IMG_0399, alt: 'Image 0399' },
    { src: IMG_0434, alt: 'Image 0434' },
    { src: IMG_2249, alt: 'Image 2249' }
  ];

  return (
    <InfoCard heading={'March 2025'}>
      <article className='flex w-full flex-col gap-5'>
        <Suspense fallback={<LoadingSpinner />}>
          <ImageSlider autoScroll images={images} />
        </Suspense>
        <section className='flex w-full flex-col gap-3'>
          <p>
            My little nephew is already getting so big, he is smiling and happy and VERY well fed. My other nephew is
            starting to speak in full sentences and I am loving every second of it. My brother-in-law and I took him to
            a paintball tournament this month and he was loving playing with all the spent paint on the ground, it was a
            blast. I got some good shots at the tournament felt like taking more pictures of things and seeing how they
            would come out and overall I am pretty proud of the results.
          </p>
          <p>
            I also went out to Boston, no reason other than to just go which some people found strange. I guess we
            don&apos;t vacation as much as we are supposed to because I used to up and leave all the time. The skyline
            of this city is beautiful, my friends that I was with are beautiful people and the city itself is wonderful.
            Of all the cities I have been to and spent time in Boston is my favorite.
          </p>
        </section>
        <ButtonLink href='https://www.instagram.com/p/DH42sHLRhov/?img_index=1' target='_blank' prefetch={false}>
          Instagram Post
        </ButtonLink>
      </article>
    </InfoCard>
  );
}
