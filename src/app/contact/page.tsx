import StyledLink from '@/components/ui/StyledLink';
import ContactForm from '@/components/forms/ContactForm';

import { EMAIL } from '@/consts';

export default function Page() {
  return (
    <div className='flex w-full flex-col gap-5'>
      <h1 className='text-3xl font-semibold'>Contact Me</h1>
      <p>
        Feel free to reach out using the form below or email me directly at{' '}
        <StyledLink href={`mailto:${EMAIL}`} prefetch={false}>
          {EMAIL}
        </StyledLink>
        .
      </p>
      <ContactForm />
    </div>
  );
}
