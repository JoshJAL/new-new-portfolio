import PageLink from '@/components/photography/PageLink';

import { GitLogo, JJLogo, MarkdownLogo, PrettierLogo, TypeScriptLogo } from '@/guide-thumbnails';

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
    },
    {
      description: 'Lightweight Markup Language',
      heading:
        'Markdown is an extremely simple markup language used to generate text files with simple formatting syntax.',
      href: '/guides/markdown',
      image: MarkdownLogo
    },
    {
      description: 'Prettier - Opinionated Code Formatter',
      heading:
        'A code formatter that formats your code on save, eliminates the need to discuss style in code review and saves time and energy.',
      href: '/guides/prettier',
      image: PrettierLogo
    },
    {
      description: 'TypeScript',
      heading: 'A quick overview of TypeScript and why I Choose to Use it',
      href: '/guides/typescript',
      image: TypeScriptLogo
    }
  ];

  return (
    <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2'>
      {posts.map((post) => (
        <PageLink post={post} key={post.href} />
      ))}
    </div>
  );
}
