import PageLink from '@/components/photography/PageLink';

import { Jan2025, Feb2025, Mar2025 } from '@/photography-thumbnails';

import type { Post } from '@/types/photography';

export default function Page() {
  const posts: Post[] = [
    {
      description:
        'Traveling again was great, taking the time to look at more art, make some good food, and spend time with the ones I love was the reset I needed.',
      heading: 'March 2025',
      href: '/photography/mar-2025',
      image: Mar2025
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
        'I got a camera this month, my grandma came to town, and my nephew was born. It was a busy month, but a really rewarding one.',
      heading: 'January 2025',
      href: '/photography/jan-2025',
      image: Jan2025
    }
  ];

  return (
    <article>
      <h1>Photography</h1>
      <p>
        I&apos;m not very good, but I am enjoying getting out there and taking pictures of things if you want to check
        them out here they are broken up by month and year.
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2'>
        {posts.map((post) => (
          <PageLink black post={post} key={post.href} />
        ))}
      </div>
    </article>
  );
}
