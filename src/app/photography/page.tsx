import PageLink from '@/components/photography/PageLink';

import { Jan2025, Feb2025, Mar2025 } from '@/photography-thumbnails';

import type { Post } from '@/types/photography';

export default function Page() {
  const posts: Post[] = [
    {
      description:
        'I got a camera this month, my grandma came to town, and my nephew was born. It was a busy month, but a really rewarding one.',
      heading: 'January 2025',
      href: '/photography/jan-2025',
      image: Jan2025
    },
    {
      description:
        'Getting situated with the new baby was a lot easier for my family than we initially thought. I spent some time with some friends and listened to GNX a little too much.',
      heading: 'February 2025',
      href: '/photography/feb-2025',
      image: Feb2025
    },
    {
      description:
        'Traveling again was great, taking the time to look at more art, make some good food, and spend time with the ones I love was the reset I needed.',
      heading: 'March 2025',
      href: '/photography/mar-2025',
      image: Mar2025
    }
  ];

  return (
    <div className='flex w-full flex-col gap-5'>
      {posts.map((post) => (
        <PageLink post={post} key={post.href} />
      ))}
    </div>
  );
}
