import BreadCrumb from '@/components/ui/BreadCrumb';
import InfoCard from '@/components/ui/InfoCard';
import TiltCard from '@/components/ui/TiltCard';
import Technology from '@/components/ui/Technology';
import Image from 'next/image';
import GlassButtonLink from '@/components/ui/GlassButtonLink';

import { Roboto } from 'next/font/google';

import type { Tech } from '@/types/tech';
import type { StaticImageData } from 'next/image';

const roboto = Roboto({ subsets: ['latin'] });

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
    <article className='flex w-full flex-col gap-5'>
      <BreadCrumb current={title} link={link} />
      <h1 className={`text-3xl font-semibold ${roboto.className}`}>{title}</h1>
      <TiltCard className='mx-auto w-fit' tiltMax={12} glareOpacity={0.25}>
        <div className='relative overflow-hidden rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.25)]'>
          <div className='pop absolute inset-0 z-10 bg-black/10'></div>
          <Image
            className={` ${imageBackgroundColor ? imageBackgroundColor : 'bg-white'} ${imagePadding}`}
            alt={title}
            src={image}
            placeholder='blur'
            height={450}
            width={450}
            quality={60}
          />
        </div>
      </TiltCard>
      <InfoCard heading={'Technologies'}>
        <div className='flex w-full flex-wrap gap-3'>
          {tech.map((t) => (
            <Technology tech={t} key={t.label} />
          ))}
        </div>
      </InfoCard>
      <InfoCard heading={'Information'}>
        <section className='flex w-full flex-col gap-3'>
          {children}
          {codeHref && (
            <GlassButtonLink target='_blank' prefetch={false} colorSwap3 href={codeHref}>
              View Source Code
            </GlassButtonLink>
          )}
          {href && (
            <GlassButtonLink target='_blank' prefetch={false} href={href}>
              Visit Project
            </GlassButtonLink>
          )}
        </section>
      </InfoCard>
    </article>
  );
}
