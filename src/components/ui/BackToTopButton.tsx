import { IoArrowUpOutline } from 'react-icons/io5';

export default function BackToTopButton() {
  return (
    <a
      href='#top'
      aria-label='Back to top'
      title='Back to top'
      className='pop glass-edge nice-hover-no-shadow fixed right-5 bottom-3 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-dark-purple/40 text-white liquid-blur transition-[background-color,box-shadow] duration-200 hover:bg-cerulean/50'
    >
      <IoArrowUpOutline aria-hidden='true' className='size-6' />
    </a>
  );
}
