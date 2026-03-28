import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
  colorSwap?: boolean;
  heading: number | string;
  id?: string;
}

export default function InfoCard({ children, colorSwap, heading, id }: Props) {
  if (colorSwap) {
    return (
      <div
        id={id}
        className='divide-naples-yellow/40 bg-davys-gray/50 border-davys-gray/20 pop glass-edge divide-y overflow-hidden rounded-2xl border text-white liquid-blur'
      >
        <div className={`px-4 py-5 text-2xl font-bold sm:px-6 ${roboto.className}`}>{heading}</div>
        <div className='px-4 py-5 sm:p-6'>{children}</div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`divide-bittersweet/40 bg-cerulean/50 border-cerulean/20 pop glass-edge divide-y overflow-hidden rounded-2xl border text-white liquid-blur`}
    >
      <div className={`px-4 py-5 text-2xl font-bold sm:px-6 ${roboto.className}`}>{heading}</div>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
