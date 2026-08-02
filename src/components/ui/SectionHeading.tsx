interface Props {
  as?: 'h1' | 'h2';
  children: React.ReactNode;
  eyebrow?: string;
  id?: string;
}

// Display-face heading that sits directly on the backdrop, outside any glass panel.
// scroll-mt-24 keeps anchor jumps clear of the fixed header pill.
export default function SectionHeading({ as = 'h2', children, eyebrow, id }: Props) {
  const Tag = as;

  return (
    <div id={id} className='flex scroll-mt-24 flex-col gap-2'>
      {eyebrow && <p className='text-sm font-medium tracking-widest text-champagne uppercase'>{eyebrow}</p>}
      <Tag className='font-display'>{children}</Tag>
      <div className='h-0.5 w-16 rounded-full bg-linear-to-r from-naples-yellow to-bittersweet' />
    </div>
  );
}
