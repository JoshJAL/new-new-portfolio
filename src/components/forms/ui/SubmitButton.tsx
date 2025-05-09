import Button from '@/components/ui/Button';

import { useFormContext } from '@/components/forms/ui';
import { useStore } from '@tanstack/react-form';

interface Props {
  colorSwap?: boolean;
  text?: string;
  submittingText?: string;
}

export function SubmitButton({ colorSwap, text = 'Submit', submittingText = 'Submitting...' }: Props) {
  const form = useFormContext();

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [state.isSubmitting, state.canSubmit]);

  return (
    <Button colorSwap={colorSwap} type='submit' disabled={isSubmitting || !canSubmit}>
      {isSubmitting ? submittingText : text}
    </Button>
  );
}
