'use client';

import Webcam from 'react-webcam';
import GlassButton from '@/components/ui/GlassButton'; // Assuming you have this component

import { useState, useCallback } from 'react';

export default function WebcamBackground() {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [facingMode, setFacingMode] = useState('environment');

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode
  };

  const toggleCamera = useCallback(() => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  }, []);

  const startWebcam = () => {
    setIsWebcamActive(true);
  };

  const stopWebcam = () => {
    setIsWebcamActive(false);
  };

  return (
    <>
      {isWebcamActive ? (
        <>
          {/* 1. The Background Video Container (unchanged) */}
          <div className='fixed top-0 left-0 z-[-1] h-full w-full'>
            <Webcam
              audio={false}
              videoConstraints={videoConstraints}
              screenshotFormat='image/jpeg'
              className='h-full w-full object-cover'
              key={facingMode}
            />
          </div>

          {/* 2. The Foreground Controls Container (MODIFIED) */}
          {/* Positioned at the same level as BackToTopButton */}
          <div className='fixed bottom-3 left-5 z-10 flex flex-col gap-4 md:flex-row'>
            <GlassButton type='button' onClick={toggleCamera}>
              Toggle Camera
            </GlassButton>
            <GlassButton type='button' onClick={stopWebcam}>
              Stop Webcam
            </GlassButton>
          </div>
        </>
      ) : (
        // === WHEN WEBCAM IS INACTIVE === (unchanged)
        <div className='fixed bottom-3 left-5 z-10'>
          <GlassButton type='button' onClick={startWebcam}>
            Start Webcam BG
          </GlassButton>
        </div>
      )}
    </>
  );
}
