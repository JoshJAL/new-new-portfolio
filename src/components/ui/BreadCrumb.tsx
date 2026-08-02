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
    <nav aria-label='Breadcrumb'>
      <ol className='flex w-full list-none items-center gap-5'>
        <li>
          <GlassButtonLink fit href={link.href}>
            {link.label}
          </GlassButtonLink>
        </li>
        <li aria-hidden='true'>
          <FaChevronRight aria-hidden='true' className='size-6' />
        </li>
        <li>
          <p aria-current='page'>{current}</p>
        </li>
      </ol>
    </nav>
  );
}
