import SubmitButton from './SubmitButton';
import TextAreaField from './TextAreaField';
import TextField from './TextField';

import { createFormHook } from '@tanstack/react-form';

import { fieldContext, formContext } from './formContexts';

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
