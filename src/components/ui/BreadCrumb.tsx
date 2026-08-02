import GlassButtonLink from './GlassButtonLink';

import { FaChevronRight } from 'react-icons/fa';

interface Props {
  current: string;
  link: {
    label: string;
    href: string;
  };
}

export default function BreadCrumb({ current, link }: Props) {
  return (
    <div className='flex w-full items-center gap-5'>
      <GlassButtonLink fit href={link.href}>
        {link.label}
      </GlassButtonLink>
      <FaChevronRight className='size-6' />
      <p>{current}</p>
    </div>
  );
}
