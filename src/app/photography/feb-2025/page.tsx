import LoadingSpinner from '@/components/loading/LoadingSpinner';
import ButtonLink from '@/components/ui/ButtonLink';
import ImageSlider from '@/components/ui/ImageSlider';
import InfoCard from '@/components/ui/InfoCard';

import {
  IMG_0100,
  IMG_0102,
  IMG_0103,
  IMG_0104,
  IMG_0105,
  IMG_0107,
  IMG_0109,
  IMG_0113,
  IMG_0114,
  IMG_0116,
  IMG_0117,
  IMG_0118,
  IMG_0119,
  IMG_0120,
  IMG_0121,
  IMG_0122,
  IMG_0130,
  IMG_0134,
  IMG_0168,
  IMG_0170,
  IMG_0171,
  IMG_0177,
  IMG_0178,
  IMG_0179,
  IMG_0182,
  IMG_0183,
  IMG_0184,
  IMG_0185,
  IMG_0186,
  IMG_0188
} from '@/photography/feb-2025';

import { Suspense } from 'react';

import type { StaticImageData } from 'next/image';

export default function Page() {
  const images: { src: StaticImageData; alt: string }[] = [
    { src: IMG_0100, alt: 'Image 0100' },
    { src: IMG_0102, alt: 'Image 0102' },
    { src: IMG_0103, alt: 'Image 0103' },
    { src: IMG_0104, alt: 'Image 0104' },
    { src: IMG_0105, alt: 'Image 0105' },
    { src: IMG_0107, alt: 'Image 0107' },
    { src: IMG_0109, alt: 'Image 0109' },
    { src: IMG_0113, alt: 'Image 0113' },
    { src: IMG_0114, alt: 'Image 0114' },
    { src: IMG_0116, alt: 'Image 0116' },
    { src: IMG_0117, alt: 'Image 0117' },
    { src: IMG_0118, alt: 'Image 0118' },
    { src: IMG_0119, alt: 'Image 0119' },
    { src: IMG_0120, alt: 'Image 0120' },
    { src: IMG_0121, alt: 'Image 0121' },
    { src: IMG_0122, alt: 'Image 0122' },
    { src: IMG_0130, alt: 'Image 0130' },
    { src: IMG_0134, alt: 'Image 0134' },
    { src: IMG_0168, alt: 'Image 0168' },
    { src: IMG_0170, alt: 'Image 0170' },
    { src: IMG_0171, alt: 'Image 0171' },
    { src: IMG_0177, alt: 'Image 0177' },
    { src: IMG_0178, alt: 'Image 0178' },
    { src: IMG_0179, alt: 'Image 0179' },
    { src: IMG_0182, alt: 'Image 0182' },
    { src: IMG_0183, alt: 'Image 0183' },
    { src: IMG_0184, alt: 'Image 0184' },
    { src: IMG_0185, alt: 'Image 0185' },
    { src: IMG_0186, alt: 'Image 0186' },
    { src: IMG_0188, alt: 'Image 0188' }
  ];

  return (
    <InfoCard heading={'February 2025'}>
      <article className='flex w-full flex-col gap-5'>
        <Suspense fallback={<LoadingSpinner />}>
          <ImageSlider autoScroll images={images} />
        </Suspense>
        <section className='flex w-full flex-col gap-3'>
          <p>
            I got some new lenses this month and really wanted to try them out. Also, apparently when you get a camera
            it means that your family never has to pay for a photographer ever again so guess who was in charge of
            taking the new born photos for his new nephew? Me. 10/10 experience would absolutely do it again. His big
            brother loves him so very much. It was nice to get some pictures that my family really liked. It made me
            feel like I was doing something right.
          </p>
          <p>
            I really love my friends and I really love bowling. So of course I went to a different city to bowl with
            some of the best ones I&apos;ve got. I know that I am lucky to be able to spend so much time with my loved
            ones no matter how separated we are so I don&apos;t take it for granted. I would and have and do travel
            across the world for my friends and I will do it over and over again until I die.
          </p>
        </section>
        <ButtonLink prefetch={false} target='_blank' href='https://www.instagram.com/p/DGo-PAqRCa0/?img_index=1'>
          Instagram Post
        </ButtonLink>
      </article>
    </InfoCard>
  );
}
