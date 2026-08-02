'use client';

import { createContext, useContext, useState } from 'react';

interface BackgroundContextValue {
  webcamActive: boolean;
  setWebcamActive: (active: boolean) => void;
}

const BackgroundContext = createContext<BackgroundContextValue>({
  webcamActive: false,
  setWebcamActive: () => {}
});

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [webcamActive, setWebcamActive] = useState(false);
  const value = { webcamActive, setWebcamActive };

  return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>;
}

export function useBackground() {
  return useContext(BackgroundContext);
}
