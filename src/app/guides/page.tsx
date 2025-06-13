import PageLink from '@/components/photography/PageLink';

import { GitLogo, JJLogo } from '@/guide-thumbnails';

import type { Post } from '@/types/photography';

export default function Page() {
  const posts: Post[] = [
    {
      description: 'A guide on the basics of Git and GitHub, including installation, setup, and common commands.',
      heading: 'Git & GitHub for Beginners',
      href: '/guides/git',
      image: GitLogo
    },
    {
      description: 'A Git-compatible VCS that is both simple and powerful',
      heading: 'Jujutsu — A Version Control System',
      href: '/guides/jj',
      image: JJLogo
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
