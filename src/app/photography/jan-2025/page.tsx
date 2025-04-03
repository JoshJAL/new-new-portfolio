import ButtonLink from '@/components/ui/ButtonLink';
import ImageSlider from '@/components/ui/ImageSlider';
import InfoCard from '@/components/ui/InfoCard';

import {
  IMG_0003,
  IMG_0005,
  IMG_0044,
  IMG_0047,
  IMG_0054,
  IMG_0062,
  IMG_0063,
  IMG_0067,
  IMG_0069,
  IMG_0075,
  IMG_0079,
  IMG_0080,
  IMG_0081,
  IMG_0082,
  IMG_0083,
  IMG_0084,
  IMG_0085,
  IMG_0087,
  IMG_0094
} from '@/photography/jan-2025';

import type { StaticImageData } from 'next/image';

export default function Page() {
  const images: { src: StaticImageData; alt: string }[] = [
    { src: IMG_0003, alt: 'Image 0003' },
    { src: IMG_0005, alt: 'Image 0005' },
    { src: IMG_0044, alt: 'Image 0044' },
    { src: IMG_0047, alt: 'Image 0047' },
    { src: IMG_0054, alt: 'Image 0054' },
    { src: IMG_0062, alt: 'Image 0062' },
    { src: IMG_0063, alt: 'Image 0063' },
    { src: IMG_0067, alt: 'Image 0067' },
    { src: IMG_0069, alt: 'Image 0069' },
    { src: IMG_0075, alt: 'Image 0075' },
    { src: IMG_0079, alt: 'Image 0079' },
    { src: IMG_0080, alt: 'Image 0080' },
    { src: IMG_0081, alt: 'Image 0081' },
    { src: IMG_0082, alt: 'Image 0082' },
    { src: IMG_0083, alt: 'Image 0083' },
    { src: IMG_0084, alt: 'Image 0084' },
    { src: IMG_0085, alt: 'Image 0085' },
    { src: IMG_0087, alt: 'Image 0087' },
    { src: IMG_0094, alt: 'Image 0094' }
  ];

  return (
    <InfoCard heading={'January 2025'}>
      <article className='flex w-full flex-col gap-5'>
        <ImageSlider autoScroll images={images} />
        <section className='flex w-full flex-col gap-3'>
          <p>
            In the past I worked as a video editor, helped direct and film music videos and concerts and much more. I
            take thousands of pictures on my phone, but have shockingly never owned a camera myself. After talking to
            some friends they convinced me to get a camera and get back to doing something with it. I am just making
            memories and my life is somewhat exciting so why not share that with everyone instead of just keeping it to
            myself?
          </p>
          <p>
            January was a packed month, I spent a lot fo time with my grandmother and my nephew was born. Noise was
            high, family was stressed and there was a lot of fun to be had. I got to know my new camera while doing a
            lot of floating.
          </p>
        </section>
        <ButtonLink prefetch={false} target='_blank' href='https://www.instagram.com/p/DFhB1TmRarU/?img_index=1'>
          Instagram Post
        </ButtonLink>
      </article>
    </InfoCard>
  );
}
