import Image from 'next/image';

import { Link } from 'next-view-transitions';
import { BiChevronRightCircle } from 'react-icons/bi';

import type { Post } from '@/types/photography';

interface Props {
  black?: boolean;
  post: Post;
}

export default function PageLink({ black, post }: Props) {
  return (
    <Link
      prefetch
      href={post.href}
      className='bg-cerulean/50 border-cerulean/20 pop nice-hover-no-shadow grid w-full grid-cols-1 gap-5 rounded-lg border p-3 text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 md:grid-cols-2'
    >
      <div className='relative mx-auto w-fit overflow-hidden rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] md:mx-0'>
        <div className='pop absolute inset-0 z-10 bg-black/10' />
        <Image
          className={`h-full w-full ${black ? 'bg-black' : 'bg-white'} object-contain`}
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
    </Link>
  );
}
