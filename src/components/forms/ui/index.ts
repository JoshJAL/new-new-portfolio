import SubmitButton from './SubmitButton';
import TextAreaField from './TextAreaField';
import TextField from './TextField';

import { fieldContext, formContext } from './formContexts';
import { createFormHook } from '@tanstack/react-form';

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
