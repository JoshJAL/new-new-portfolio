import ContactForm from '@/components/forms/ContactForm';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';
import StyledLink from '@/components/ui/StyledLink';

import { SITE_CONFIG } from '@/utils/siteConfig';

export default function Page() {
  return (
    <article className='flex w-full flex-col gap-6'>
      <SectionHeading as='h1' eyebrow='Say hello'>
        Contact Me
      </SectionHeading>
      <GlassPanel tint='caribbean' className='flex flex-col gap-4'>
        <p>
          Feel free to reach out using the form below or email me directly at{' '}
          <StyledLink href={`mailto:${SITE_CONFIG.email}`} prefetch={false}>
            {SITE_CONFIG.email}
          </StyledLink>
          .
        </p>
        <ContactForm />
      </GlassPanel>
    </article>
  );
}
