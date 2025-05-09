'use client';

import FormWrapper from '@/components/forms/ui/FormWrapper';

import { contactSchema } from '@/zod-schemas/contact';
import { useAppForm } from '@/components/forms/ui';
import { sendThankYouEmail } from '@/server/actions/email';
import { createMessage } from '@/server/actions/messages';
import { useTransitionRouter } from 'next-view-transitions';

export default function ContactForm() {
  const router = useTransitionRouter();

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

      const success = await createMessage(
        value.email.trim().toLowerCase(),
        value.firstName.trim(),
        value.lastName.trim(),
        value.message.trim(),
        value.phoneNumber.trim()
      );

      if (success) {
        await sendThankYouEmail(value.email.trim().toLowerCase(), value.firstName.trim(), value.lastName.trim());
        router.push('/thank-you?id=' + success);
      } else {
        alert('Something went wrong sending your message, please try again.');
      }
    },
    validators: {
      onChange: contactSchema
    }
  });

  return (
    <FormWrapper handleSubmit={form.handleSubmit}>
      <form.AppField name='firstName'>{(field) => <field.TextField label='Your First Name' autoFocus />}</form.AppField>
      <form.AppField name='lastName'>{(field) => <field.TextField label='Your Last Name' />}</form.AppField>
      <form.AppField name='email'>{(field) => <field.TextField label='Your Email' type='email' />}</form.AppField>
      <form.AppField name='phoneNumber'>
        {(field) => <field.TextField label='Your Phone Number' required={false} placeholder='(Optional)' type='tel' />}
      </form.AppField>
      <form.AppField name='message'>{(field) => <field.TextAreaField label='Your Message' />}</form.AppField>
      <form.AppForm>
        <form.SubmitButton text='Contact Me!' submittingText='Contacting...' />
      </form.AppForm>
    </FormWrapper>
  );
}
