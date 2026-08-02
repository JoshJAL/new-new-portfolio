import GlassButtonLink from '@/components/ui/GlassButtonLink';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeading from '@/components/ui/SectionHeading';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false
  },
  title: 'Thank You'
};

export default function Page() {
  return (
    <article className='flex w-full flex-col gap-6'>
      <SectionHeading as='h1'>Thank you!</SectionHeading>
      <GlassPanel tint='verdigris' className='flex flex-col gap-3'>
        <p>
          Your message has been received. You should also receive a confirmation email shortly from
          joshua.levine@contact.joshualevine.me!
        </p>
        <p>
          <strong>
            <u>That email is not monitored and any responses to it will not be seen!</u>
          </strong>
        </p>
        <GlassButtonLink fit href='/'>
          Back Home!
        </GlassButtonLink>
      </GlassPanel>
    </article>
  );
}
