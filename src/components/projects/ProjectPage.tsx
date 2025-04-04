import ButtonLink from '@/components/ui/ButtonLink';
import InfoCard from '@/components/ui/InfoCard';
import Technology from '@/components/ui/Technology';
import Image from 'next/image';

import type { Tech } from '@/types/tech';
import type { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  codeHref?: string;
  href?: string;
  image: StaticImageData;
  imagePadding?: string;
  tech: Tech[];
  title: string;
}

export default function ProjectPage({ children, codeHref, href, image, imagePadding, tech, title }: Props) {
  return (
    <article className='flex w-full flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>{title}</h1>
      <Image
        className={`mx-auto rounded-lg shadow-[3px_3px_0px_rgba(255,255,255,1)] ${imagePadding}`}
        alt={title}
        src={image}
        placeholder='blur'
        height={450}
        width={450}
        quality={60}
      />
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
            <ButtonLink target='_blank' prefetch={false} colorSwap3 href={codeHref}>
              View Source Code
            </ButtonLink>
          )}
          {href && (
            <ButtonLink target='_blank' prefetch={false} href={href}>
              Visit Project
            </ButtonLink>
          )}
        </section>
      </InfoCard>
    </article>
  );
}
