import { SubmitButton } from '@/components/forms/ui/SubmitButton';
import { TextAreaField } from '@/components/forms/ui/TextAreaField';
import { TextField } from '@/components/forms/ui/TextField';

import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextAreaField,
    TextField
  },
  formComponents: {
    SubmitButton
  },
  fieldContext,
  formContext
});
