import SiteLink from './SiteLink';
import TiltCard from './TiltCard';
import Image from 'next/image';

import { BiChevronRightCircle } from 'react-icons/bi';

import type { Post } from '@/types/post';

interface Props {
  black?: boolean;
  post: Post;
}

export default function PageLink({ black, post }: Props) {
  return (
    <TiltCard className='w-full' innerClassName='h-full'>
      <SiteLink
        href={post.href}
        className='pop glass-edge nice-hover-no-shadow grid size-full grid-cols-1 gap-5 rounded-2xl border border-cerulean/20 bg-cerulean/50 p-3 text-white liquid-blur transition-shadow duration-300 ease-in-out md:grid-cols-2'
      >
        <div className='relative overflow-hidden rounded-xl media-shadow'>
          <div className='pop absolute inset-0 z-10 bg-black/10' />
          <Image
            className={`size-full ${black ? 'bg-black' : 'bg-white'} object-contain`}
            placeholder='blur'
            src={post.image}
            alt={post.heading}
            height={250}
            width={250}
            quality={60}
          />
        </div>
        <div className='flex w-full flex-col gap-3'>
          <h2 className='text-xl font-semibold md:text-2xl'>{post.heading}</h2>
          <p className='text-sm md:text-base'>{post.description}</p>
          <div className='gradient_underline flex w-fit items-center gap-2'>
            <BiChevronRightCircle /> See More
          </div>
        </div>
      </SiteLink>
    </TiltCard>
  );
}
