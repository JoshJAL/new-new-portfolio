import Link from 'next/link';

import { ROUTE_TRANSITION_TYPES } from '@/utils/navigationTransitions';

import { isInternalRouteHref } from '@/utils/navigationTransitions';

import type { ComponentPropsWithoutRef } from 'react';

export interface SiteLinkProps extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: string;
  scroll?: boolean;
}

export default function SiteLink({ href, rel: callerRel, scroll, target, ...anchorProps }: SiteLinkProps) {
  const rel = callerRel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

  if (!isInternalRouteHref(href)) {
    return <a {...anchorProps} href={href} rel={rel} target={target} />;
  }

  return (
    <Link
      {...anchorProps}
      href={href}
      prefetch={true}
      rel={rel}
      scroll={scroll}
      target={target}
      transitionTypes={ROUTE_TRANSITION_TYPES}
    />
  );
}
