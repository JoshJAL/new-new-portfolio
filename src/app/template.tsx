import { RACK_FOCUS_TRANSITION_TYPE } from '@/utils/navigationTransitions';
import { ViewTransition } from 'react';

// A template remounts per navigation, so this boundary gets true exit/enter
// animations; layout chrome (header, footer, bokeh canvas) stays outside it.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ [RACK_FOCUS_TRANSITION_TYPE]: 'rack-focus-enter', default: 'rack-focus-enter' }}
      exit={{ [RACK_FOCUS_TRANSITION_TYPE]: 'rack-focus-exit', default: 'rack-focus-exit' }}
      default='none'
    >
      {children}
    </ViewTransition>
  );
}
