import type { AnyFieldMeta } from '@tanstack/react-form';

interface Props {
  meta: AnyFieldMeta;
}

export default function FieldErrors({ meta }: Props) {
  if (!meta.isTouched) return null;

  const messages = Array.from(
    new Set(
      meta.errors
        .map((error) => {
          if (typeof error === 'string') return error;
          if (error instanceof Error) return error.message;
          if (typeof error === 'object' && error && 'message' in error && typeof error.message === 'string') {
            return error.message;
          }

          return null;
        })
        .filter((message): message is string => Boolean(message))
    )
  );

  return messages.map((message) => (
    <p key={message} className='mt-2 text-sm font-medium text-red-600 italic'>
      {message}
    </p>
  ));
}
