import ButtonLink from '@/components/ui/ButtonLink';
import Info from '@/components/ui/Info';
import InfoCard from '@/components/ui/InfoCard';

import { getMessageById } from '@/server/fetches/messages';
import { notFound } from 'next/navigation';

export default async function Page(props: { searchParams: Promise<{ id: string }> }) {
  const { id } = await props.searchParams;

  if (!id) return notFound();

  const message = await getMessageById(id);

  if (!message) return notFound();

  const name = message.firstName + ' ' + message.lastName;

  return (
    <InfoCard heading={name}>
      <div className='flex w-full flex-col gap-3'>
        <p>
          Thank you for your message you should be receiving a confirmation email shortly from
          joshua.levine@contact.joshualevine.me!
        </p>
        <p>
          <strong>
            <u>That email is not monitored and any responses to it will not be seen!</u>
          </strong>
        </p>
        <Info label='Message'>{message.message}</Info>
        <ButtonLink href='/'>Back Home!</ButtonLink>
      </div>
    </InfoCard>
  );
}
