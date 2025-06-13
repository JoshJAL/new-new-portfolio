import PageLink from '@/components/photography/PageLink';

import { GitLogo, JJLogo, MarkdownLogo, PrettierLogo, TypeScriptLogo } from '@/guide-thumbnails';

import type { Post } from '@/types/photography';

export default function Page() {
  const posts: Post[] = [
    {
      heading: 'Git & GitHub for Beginners',
      description: 'A guide on the basics of Git and GitHub, including installation, setup, and common commands.',
      href: '/guides/git',
      image: GitLogo
    },
    {
      heading: 'A Git-compatible VCS that is both simple and powerful',
      description: 'Jujutsu — A Version Control System',
      href: '/guides/jj',
      image: JJLogo
    },
    {
      heading: 'Markdown & MDX',
      description:
        'Markdown is an extremely simple markup language used to generate text files with simple formatting syntax.',
      href: '/guides/markdown',
      image: MarkdownLogo
    },
    {
      heading: 'Prettier - Opinionated Code Formatter',
      description:
        'A code formatter that formats your code on save, eliminates the need to discuss style in code review and saves time and energy.',
      href: '/guides/prettier',
      image: PrettierLogo
    },
    {
      heading: 'TypeScript',
      description: 'A quick overview of TypeScript and why I Choose to Use it',
      href: '/guides/typescript',
      image: TypeScriptLogo
    }
  ];

  return (
    <article>
      <h1>Guides</h1>
      <p>
        Write ups, guides, and documentation on technologies I think are cool so that I can better understand them and
        maybe you can too.
      </p>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2'>
        {posts.map((post) => (
          <PageLink post={post} key={post.href} />
        ))}
      </div>
    </article>
  );
}
