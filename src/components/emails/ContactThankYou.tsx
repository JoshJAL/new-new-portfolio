interface Props {
  firstName: string;
  lastName: string;
}

export default function ContactThankYou({ firstName, lastName }: Props) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Thank you for your message!</h1>
      <p className='text-lg'>
        Hi {firstName} {lastName}, thank you for reaching out to me. I appreciate your message and will get back to you
        as soon as possible.
      </p>
      <p className='text-lg'>If you have any further questions, comments, or concerns, feel free to reach out again!</p>
    </div>
  );
}
