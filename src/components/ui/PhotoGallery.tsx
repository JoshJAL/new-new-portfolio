'use client';

import Image from 'next/image';

import { IoClose } from 'react-icons/io5';
import { LuArrowBigLeft, LuArrowBigRight } from 'react-icons/lu';

import { type TouchEvent, useCallback, useEffect, useState } from 'react';

import type { StaticImageData } from 'next/image';

interface PhotoGalleryProps {
  images: { src: StaticImageData; alt: string }[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;
  const isOpen = lightboxIndex !== null;

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close, showNext, showPrev]);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) showNext();
    if (distance < -minSwipeDistance) showPrev();
  };

  return (
    <>
      <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
        {images.map(({ src, alt }, index) => (
          <button
            key={alt}
            onClick={() => setLightboxIndex(index)}
            className='group mb-4 block w-full break-inside-avoid cursor-pointer'
            aria-label={`View ${alt} fullscreen`}
          >
            <div className='pop relative overflow-hidden rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-[1.02]'>
              <div className='pop pointer-events-none absolute inset-0 z-10 bg-black/10 transition-colors duration-300 group-hover:bg-black/0' />
              <Image
                src={src}
                alt={alt}
                placeholder='blur'
                quality={60}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='block h-auto w-full bg-white'
              />
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 liquid-blur'
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role='dialog'
          aria-modal='true'
          aria-label='Photo lightbox'
        >
          <button
            onClick={close}
            className='absolute top-4 right-4 z-50 cursor-pointer rounded-full bg-white/10 p-2 text-white liquid-blur transition-colors hover:bg-white/25'
            aria-label='Close lightbox'
          >
            <IoClose className='h-6 w-6' />
          </button>

          <div className='text-champagne absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium tabular-nums'>
            {lightboxIndex + 1} / {images.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className='lightbox-nav-btn left-2 md:left-4'
            aria-label='Previous photo'
          >
            <LuArrowBigLeft className='h-6 w-6 md:h-8 md:w-8' />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className='lightbox-nav-btn right-2 md:right-4'
            aria-label='Next photo'
          >
            <LuArrowBigRight className='h-6 w-6 md:h-8 md:w-8' />
          </button>

          <div
            className='relative max-h-[85vh] max-w-[90vw] md:max-w-[80vw]'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              placeholder='blur'
              quality={85}
              sizes='90vw'
              className='max-h-[85vh] w-auto rounded-2xl object-contain'
            />
          </div>
        </div>
      )}
    </>
  );
}
