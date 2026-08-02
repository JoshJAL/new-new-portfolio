export const RACK_FOCUS_TRANSITION_TYPE = 'rack-focus';

export const ROUTE_TRANSITION_TYPES = [RACK_FOCUS_TRANSITION_TYPE];

export function isInternalRouteHref(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}
