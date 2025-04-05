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
        className='divide-desert-sand bg-dark-purple divide-y overflow-hidden rounded-lg text-white shadow-[3px_3px_0px_rgba(255,255,255,1)]'
      >
        <div className='px-4 py-5 text-2xl font-bold sm:px-6'>{heading}</div>
        <div className='px-4 py-5 sm:p-6'>{children}</div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className='divide-carribean-current bg-desert-sand divide-y overflow-hidden rounded-lg text-black shadow-[3px_3px_0px_rgba(255,255,255,1)]'
    >
      <div className='px-4 py-5 text-2xl font-bold sm:px-6'>{heading}</div>
      <div className='px-4 py-5 sm:p-6'>{children}</div>
    </div>
  );
}
