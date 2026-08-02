'use client';

import Webcam from 'react-webcam';

import { IoCameraReverseOutline, IoVideocamOffOutline, IoVideocamOutline } from 'react-icons/io5';

import { useBackground } from '@/components/background/BackgroundContext';
import { useState } from 'react';

const ICON_BUTTON_CLASSES =
  'pop glass-edge liquid-blur nice-hover-no-shadow bg-dark-purple/40 hover:bg-cerulean/50 flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-[background-color,box-shadow] duration-200';

export default function WebcamBackground() {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [facingMode, setFacingMode] = useState('environment');
  // Pauses the bokeh render loop while the webcam feed is covering it
  const { setWebcamActive } = useBackground();

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  const startWebcam = () => {
    setIsWebcamActive(true);
    setWebcamActive(true);
  };

  const stopWebcam = () => {
    setIsWebcamActive(false);
    setWebcamActive(false);
  };

  return (
    <>
      {isWebcamActive ? (
        <>
          <div className='fixed top-0 left-0 -z-1 size-full'>
            <Webcam
              audio={false}
              videoConstraints={videoConstraints}
              screenshotFormat='image/jpeg'
              className='size-full object-cover'
              key={facingMode}
            />
          </div>
          <div className='fixed bottom-3 left-5 z-10 flex gap-3'>
            <button
              type='button'
              onClick={toggleCamera}
              aria-label='Switch camera'
              title='Switch camera'
              className={ICON_BUTTON_CLASSES}
            >
              <IoCameraReverseOutline className='size-6' />
            </button>
            <button
              type='button'
              onClick={stopWebcam}
              aria-label='Stop webcam background'
              title='Stop webcam background'
              className={ICON_BUTTON_CLASSES}
            >
              <IoVideocamOffOutline className='size-6' />
            </button>
          </div>
        </>
      ) : (
        <div className='fixed bottom-3 left-5 z-10'>
          <button
            type='button'
            onClick={startWebcam}
            aria-label='Start webcam background'
            title='Start webcam background'
            className={ICON_BUTTON_CLASSES}
          >
            <IoVideocamOutline className='size-6' />
          </button>
        </div>
      )}
    </>
  );
}
