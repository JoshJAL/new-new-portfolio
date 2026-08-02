'use client';

import FormWrapper from '@/components/forms/ui/FormWrapper';

import { useAppForm } from '@/components/forms/ui';
import { submitContact } from '@/server/actions/contact';
import { contactSchema } from '@/utils/contact/contactSchema';
import { SITE_CONFIG } from '@/utils/siteConfig';
import { useTransitionRouter } from 'next-view-transitions';
import { useState } from 'react';

export default function ContactForm() {
  const router = useTransitionRouter();
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
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
        const values = { ...value, companyWebsite };
        const result = await submitContact(values);

        if (result.status === 'success') {
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
        {(field) => <field.TextField label='Your First Name' maxLength={100} autoFocus />}
      </form.AppField>
      <form.AppField name='lastName'>
        {(field) => <field.TextField label='Your Last Name' maxLength={100} />}
      </form.AppField>
      <form.AppField name='email'>
        {(field) => <field.TextField label='Your Email' maxLength={254} type='email' />}
      </form.AppField>
      <form.AppField name='phoneNumber'>
        {(field) => (
          <field.TextField
            label='Your Phone Number'
            maxLength={50}
            required={false}
            placeholder='(Optional)'
            type='tel'
          />
        )}
      </form.AppField>
      <form.AppField name='message'>
        {(field) => <field.TextAreaField label='Your Message' maxLength={5000} />}
      </form.AppField>
      <input
        aria-hidden='true'
        autoComplete='off'
        className='hidden'
        name='companyWebsite'
        onChange={(event) => setCompanyWebsite(event.target.value)}
        tabIndex={-1}
        type='text'
        value={companyWebsite}
      />
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
