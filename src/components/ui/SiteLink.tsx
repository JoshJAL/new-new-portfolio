import Link from 'next/link';

import { isInternalRouteHref, ROUTE_TRANSITION_TYPES } from '@/utils/navigationTransitions';

import type { ComponentPropsWithoutRef } from 'react';

export interface SiteLinkProps extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: string;
  scroll?: boolean;
}

export default function SiteLink({ href, scroll, ...anchorProps }: SiteLinkProps) {
  if (!isInternalRouteHref(href)) {
    return <a {...anchorProps} href={href} />;
  }

  return <Link {...anchorProps} href={href} prefetch={true} scroll={scroll} transitionTypes={ROUTE_TRANSITION_TYPES} />;
}
