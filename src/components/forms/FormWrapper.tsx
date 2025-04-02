import Button from '@/components/ui/Button';

interface Props {
  children: React.ReactNode;
  colorSwap?: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  submitText?: string;
  submittingText?: string;
}

export default function FormWrapper({
  children,
  colorSwap,
  handleSubmit,
  submitting,
  submitText = 'Submit',
  submittingText = 'Submitting...'
}: Props) {
  return (
    <form className='flex w-full flex-col gap-3' onSubmit={handleSubmit}>
      {children}
      <Button colorSwap={colorSwap} type='submit'>
        {submitting ? submittingText : submitText}
      </Button>
    </form>
  );
}
