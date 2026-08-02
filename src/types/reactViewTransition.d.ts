// Next's vendored React canary exports ViewTransition/addTransitionType, but
// @types/react (stable 19.2) does not declare them yet. Remove when it does.
import type { ReactNode } from 'react';

declare module 'react' {
  type ViewTransitionClass = 'none' | 'auto' | (string & {}) | Record<string, 'none' | 'auto' | (string & {})>;

  interface ViewTransitionProps {
    children?: ReactNode;
    default?: ViewTransitionClass;
    enter?: ViewTransitionClass;
    exit?: ViewTransitionClass;
    name?: 'auto' | (string & {});
    share?: ViewTransitionClass;
    update?: ViewTransitionClass;
  }

  export function ViewTransition(props: ViewTransitionProps): ReactNode;
  export function addTransitionType(type: string): void;
}
