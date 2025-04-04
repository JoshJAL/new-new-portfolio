import Image from 'next/image';

import { Link } from 'next-view-transitions';

import type { Post } from '@/types/photography';

interface Props {
  post: Post;
}

export default function PageLink({ post }: Props) {
  return (
    <Link
      prefetch
      href={post.href}
      className='bg-desert-sand grid w-full grid-cols-1 gap-5 rounded-lg p-3 text-black transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] md:grid-cols-2'
    >
      <Image
        className='rounded-lg border-2 border-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'
        placeholder='blur'
        src={post.image}
        alt={post.heading}
        height={250}
        width={250}
        quality={60}
      />
      <div className='flex w-full flex-col gap-3'>
        <h2 className='text-xl font-semibold md:text-2xl'>{post.heading}</h2>
        <p className='text-sm md:text-base'>{post.description}</p>
      </div>
    </Link>
  );
}
