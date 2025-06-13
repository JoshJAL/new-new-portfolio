import StyledLink from './components/ui/StyledLink';

import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'>;

const components: MDXComponents = {
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-moonstone hover:text-coquelicot hover:underline underline-offset-4';
    if (href?.startsWith('/')) {
      return (
        <StyledLink prefetch href={href}>
          {children}
        </StyledLink>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }
};

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
  return {
    ...otherComponents,
    ...components
  };
}
