'use client';

import FormWrapper from './ui/FormWrapper';

import { SITE_CONFIG } from '@/utils/siteConfig';

import { useAppForm } from './ui';
import { submitContact } from '@/server/actions/contact';
import { contactSchema } from '@/utils/contact/contactSchema';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactForm() {
  const router = useRouter();
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      companyWebsite: '',
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phoneNumber: ''
    },
    onSubmit: async ({ value }) => {
      if (!confirm('Are you sure you want to send this message?')) return;

      setSubmissionError(null);
      try {
        const result = await submitContact(value);

        if (result.ok) {
          router.push(SITE_CONFIG.thankYouPath);
        } else {
          setSubmissionError(result.message);
        }
      } catch {
        setSubmissionError('Something went wrong sending your message. Please try again.');
      }
    },
    validators: {
      onChange: contactSchema
    }
  });

  return (
    <FormWrapper handleSubmit={form.handleSubmit}>
      <form.AppField name='firstName'>
        {(field) => <field.TextField label='Your First Name' maxLength={80} autoFocus />}
      </form.AppField>
      <form.AppField name='lastName'>
        {(field) => <field.TextField label='Your Last Name' maxLength={80} />}
      </form.AppField>
      <form.AppField name='email'>
        {(field) => <field.TextField label='Your Email' maxLength={254} type='email' />}
      </form.AppField>
      <form.AppField name='phoneNumber'>
        {(field) => (
          <field.TextField
            label='Your Phone Number'
            maxLength={32}
            required={false}
            placeholder='(Optional)'
            type='tel'
          />
        )}
      </form.AppField>
      <form.AppField name='message'>
        {(field) => <field.TextAreaField label='Your Message' maxLength={5000} />}
      </form.AppField>
      <form.AppField name='companyWebsite'>
        {(field) => (
          <input
            aria-hidden='true'
            autoComplete='off'
            className='hidden'
            maxLength={200}
            name='companyWebsite'
            onChange={(event) => field.handleChange(event.target.value)}
            tabIndex={-1}
            type='text'
            value={field.state.value}
          />
        )}
      </form.AppField>
      {submissionError ? (
        <p
          aria-live='polite'
          className='rounded-xl bg-red-950/60 px-3 py-2 text-sm font-medium text-red-100'
          role='alert'
        >
          {submissionError}
        </p>
      ) : null}
      <form.AppForm>
        <form.SubmitButton text='Contact Me!' submittingText='Contacting...' />
      </form.AppForm>
    </FormWrapper>
  );
}
