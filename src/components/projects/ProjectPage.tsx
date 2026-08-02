import BreadCrumb from '@/components/ui/BreadCrumb';
import GlassButtonLink from '@/components/ui/GlassButtonLink';
import GlassPanel from '@/components/ui/GlassPanel';
import Technology from '@/components/ui/Technology';
import TiltCard from '@/components/ui/TiltCard';
import Image from 'next/image';

import type { Tech } from '@/types/tech';
import type { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  codeHref?: string;
  href?: string;
  image: StaticImageData;
  imageBackgroundColor?: string;
  imagePadding?: string;
  tech: Tech[];
  title: string;
  breadcrumbLabel?: string;
  breadcrumbLink?: string;
}

export default function ProjectPage({
  children,
  codeHref,
  href,
  image,
  imageBackgroundColor,
  imagePadding,
  tech,
  title,
  breadcrumbLabel = 'Projects',
  breadcrumbLink = '/projects'
}: Props) {
  const link = {
    label: breadcrumbLabel,
    href: breadcrumbLink
  };

  return (
    <article className='flex w-full flex-col gap-6'>
      <BreadCrumb current={title} link={link} />
      <div className='flex flex-col gap-3'>
        <h1>{title}</h1>
        <div className='flex w-full flex-wrap gap-2'>
          {tech.map((t) => (
            <Technology tech={t} key={t.label} />
          ))}
        </div>
      </div>
      <TiltCard className='mx-auto w-fit' tiltMax={12} glareOpacity={0.25}>
        <div className='relative overflow-hidden rounded-xl media-shadow'>
          <div className='pop absolute inset-0 z-10 bg-black/10'></div>
          <Image
            className={`${imageBackgroundColor ?? 'bg-white'} ${imagePadding ?? ''}`}
            alt={title}
            src={image}
            placeholder='blur'
            height={450}
            width={450}
            quality={60}
          />
        </div>
      </TiltCard>
      <GlassPanel tint='cerulean' className='flex flex-col gap-3'>
        {children}
        {(codeHref || href) && (
          <div className='flex flex-wrap gap-3'>
            {codeHref && (
              <GlassButtonLink fit target='_blank' colorSwap3 href={codeHref}>
                View source code
              </GlassButtonLink>
            )}
            {href && (
              <GlassButtonLink fit target='_blank' href={href}>
                Visit project
              </GlassButtonLink>
            )}
          </div>
        )}
      </GlassPanel>
    </article>
  );
}
