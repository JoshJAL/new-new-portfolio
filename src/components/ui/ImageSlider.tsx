'use client';

import Image from 'next/image';

import { LuArrowBigLeft, LuArrowBigRight } from 'react-icons/lu';
import { TbCircleDot } from 'react-icons/tb';

import { type TouchEvent, useCallback, useEffect, useRef, useState } from 'react';

import type { StaticImageData } from 'next/image';

type ImageSliderProps = {
  images: { src: StaticImageData; alt: string }[];
  autoScroll?: boolean;
  scrollInterval?: number;
};

export default function ImageSlider({ images, autoScroll, scrollInterval = 10000 }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showNextImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }, [images.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      showNextImage();
    }, scrollInterval);
  }, [scrollInterval, showNextImage]);

  useEffect(() => {
    if (autoScroll) {
      resetTimer();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoScroll, resetTimer]);

  useEffect(() => {
    if (autoScroll) {
      resetTimer();
    }
  }, [imageIndex, autoScroll, resetTimer]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      showNextImage();
    }
    if (isRightSwipe) {
      showPrevImage();
    }
    resetTimer();
  };

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <div className='flex w-full flex-col'>
      <section
        aria-label='Image Slider'
        className='rounded-lg'
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <a href='#after-image-slider-controls' className='skip-link'>
          Skip Image Slider Controls
        </a>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
          onTouchStart={(e) => onTouchStart(e)}
          onTouchMove={(e) => onTouchMove(e)}
          onTouchEnd={onTouchEnd}
        >
          <div
            style={{
              display: 'flex',
              width: `${images.length * 100}%`,
              transform: `translateX(-${(100 / images.length) * imageIndex}%)`,
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            {images.map(({ src, alt }, index) => {
              return (
                <div key={alt} style={{ width: `${100 / images.length}%`, padding: '0 8px' }}>
                  <Image
                    quality={60}
                    height={300}
                    width={300}
                    src={src}
                    placeholder='blur'
                    alt={alt}
                    aria-hidden={imageIndex !== index}
                    className='img-slider-img mx-auto h-auto w-full max-w-[300px] rounded-lg border-2 border-white bg-white object-contain'
                  />
                </div>
              );
            })}
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={showPrevImage}
              className='img-slider-btn group'
              style={{ left: 0, borderRadius: '6px 0 0 6px' }}
              aria-label='View Previous Image'
            >
              <LuArrowBigLeft
                aria-hidden
                className='group-hover:stroke-caribbean-current transition-all duration-300 ease-in-out'
              />
            </button>
            <button
              onClick={showNextImage}
              className='img-slider-btn group'
              style={{ right: 0, borderRadius: '0 6px 6px 0' }}
              aria-label='View Next Image'
            >
              <LuArrowBigRight
                aria-hidden
                className='group-hover:stroke-caribbean-current transition-all duration-300 ease-in-out'
              />
            </button>
          </>
        )}
        <div id='after-image-slider-controls' />
      </section>
      {images.length > 1 && (
        <div className='mt-3 flex w-full items-center justify-center gap-1'>
          {images.map((_, index) => (
            <button
              key={index}
              className='img-slider-dot-btn'
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              <TbCircleDot
                aria-hidden
                className={`${index == imageIndex ? 'scale-150' : ''} transition-all duration-200 ease-in-out`}
                style={{ stroke: index === imageIndex ? '#246a73' : '' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
