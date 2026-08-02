import GlassButton from '@/components/ui/GlassButton';

import { useFormContext } from './formContexts';
import { useStore } from '@tanstack/react-form';

interface Props {
  colorSwap?: boolean;
  text?: string;
  submittingText?: string;
}

export default function SubmitButton({ colorSwap, text = 'Submit', submittingText = 'Submitting...' }: Props) {
  const form = useFormContext();

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [state.isSubmitting, state.canSubmit]);

  return (
    <GlassButton colorSwap={colorSwap} type='submit' disabled={isSubmitting || !canSubmit}>
      {isSubmitting ? submittingText : text}
    </GlassButton>
  );
}
