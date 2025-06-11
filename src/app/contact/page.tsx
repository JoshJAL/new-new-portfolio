import StyledLink from '@/components/ui/StyledLink';
import InfoCard from '@/components/ui/InfoCard';
import ContactForm from '@/components/forms/ContactForm';

import { EMAIL } from '@/consts';

export default function Page() {
  return (
    <InfoCard heading={'Contact Me'}>
      <p>
        Feel free to reach out using the form below or email me directly at{' '}
        <StyledLink href={`mailto:${EMAIL}`} prefetch={false}>
          {EMAIL}
        </StyledLink>
        .
      </p>
      <ContactForm />
    </InfoCard>
  );
}
