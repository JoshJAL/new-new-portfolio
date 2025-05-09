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
        className='divide-naples-yellow bg-davys-gray shadow-[3px_3px_0px_rgba(0,0,0,1)] divide-y overflow-hidden rounded-lg text-white'
      >
        <div className={`px-4 py-5 text-2xl font-bold sm:px-6 ${roboto.className}`}>{heading}</div>
        <div className='px-4 py-5 sm:p-6'>{children}</div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`divide-bittersweet bg-cerulean divide-y overflow-hidden rounded-lg border-2 border-white text-white shadow-[3px_3px_0px_rgba(0,0,0,1)]`}
    >
      <div className={`px-4 py-5 text-2xl font-bold sm:px-6 ${roboto.className}`}>{heading}</div>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
