import { ViewTransition } from 'react';

// A template remounts per navigation, so this boundary gets true exit/enter
// animations; layout chrome (header, footer, bokeh canvas) stays outside it.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter='rack-focus-enter' exit='rack-focus-exit' default='none'>
      {children}
    </ViewTransition>
  );
}
