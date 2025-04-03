'use client';

import Input from '@/components/ui/Input';
import TextArea from '../ui/TextArea';
import FormWrapper from './FormWrapper';

import { sendThankYouEmail } from '@/server/actions/email';
import { createMessage } from '@/server/actions/messages';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    phoneNumber: '',
    submitting: false
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirm('Are you sure you want to send this message?')) return;

    setFormState({ ...formState, submitting: true });

    const success = await createMessage(
      formState.email.trim().toLowerCase(),
      formState.firstName.trim(),
      formState.lastName.trim(),
      formState.message.trim(),
      formState.phoneNumber.trim()
    );

    if (success) {
      await sendThankYouEmail(
        formState.email.trim().toLowerCase(),
        formState.firstName.trim(),
        formState.lastName.trim()
      );
      router.push('/thank-you?id=' + success);
      setFormState({ ...formState, submitting: false });
    } else {
      alert('Something went wrong sending your message, please try again.');
      setFormState({ ...formState, submitting: false });
    }
  }

  return (
    <FormWrapper
      handleSubmit={(e) => handleSubmit(e)}
      submitting={formState.submitting}
      submitText='Contact Me!'
      submittingText='Contacting...'
    >
      <Input
        name='firstName'
        onChange={(e) => handleChange(e)}
        value={formState.firstName}
        label='Your First Name'
        autoFocus
        required
      />
      <Input
        name='lastName'
        onChange={(e) => handleChange(e)}
        value={formState.lastName}
        label='Your Last Name'
        required
      />
      <Input
        name='email'
        type='email'
        onChange={(e) => handleChange(e)}
        value={formState.email}
        label='Your Email'
        required
      />
      <Input
        name='phoneNumber'
        onChange={(e) => handleChange(e)}
        value={formState.phoneNumber}
        label='Your Phone Number'
        type='tel'
        required={false}
        placeholder='(Optional)'
      />
      <TextArea
        name='message'
        onChange={(e) => handleChange(e)}
        value={formState.message}
        label='Your Message'
        required
      />
    </FormWrapper>
  );
}
