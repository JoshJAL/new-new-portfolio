import { FieldErrors } from '@/components/forms/ui/FieldErrors';

import { useFieldContext } from '@/components/forms/ui';

interface Props {
  autoFocus?: boolean;
  label: string;
  noLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  value?: string;
}

export function TextAreaField({ autoFocus, label, noLabel, onChange, placeholder, required = true, value }: Props) {
  const field = useFieldContext<string>();

  return (
    <div>
      <label htmlFor={field.name} className={`block leading-6 font-medium ${noLabel ? 'sr-only' : ''}`}>
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          autoFocus={autoFocus}
          required={required}
          value={value ? value : field.state.value}
          onChange={onChange ? onChange : (e) => field.handleChange(e.target.value)}
          name={field.name}
          id={field.name}
          className='focus:ring-verdigris nice-focus block w-full rounded-lg border-0 bg-white px-3 py-2 text-black ring-2 ring-black transition-all duration-200 ease-in-out outline-none ring-inset placeholder:text-gray-400 focus:shadow-[3px_3px_0px_rgba(0,0,0,1)] focus:ring-inset'
          placeholder={placeholder}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
}
