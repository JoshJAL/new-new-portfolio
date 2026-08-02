import { RACK_FOCUS_TRANSITION_TYPE } from '@/utils/navigationTransitions';
import { ViewTransition } from 'react';

// This boundary enters/exits across top-level routes and updates across nested routes;
// layout chrome (header, footer, bokeh canvas) stays outside it.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ [RACK_FOCUS_TRANSITION_TYPE]: 'rack-focus-enter', default: 'rack-focus-enter' }}
      exit={{ [RACK_FOCUS_TRANSITION_TYPE]: 'rack-focus-exit', default: 'rack-focus-exit' }}
      update={{ [RACK_FOCUS_TRANSITION_TYPE]: 'rack-focus-update', default: 'none' }}
      default='none'
    >
      {children}
    </ViewTransition>
  );
}
