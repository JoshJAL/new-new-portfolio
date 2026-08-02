import FieldErrors from './FieldErrors';

import { useFieldContext } from './formContexts';

interface Props {
  autoFocus?: boolean;
  label: string;
  maxLength?: number;
  noLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  value?: string;
}

export default function TextAreaField({
  autoFocus,
  label,
  maxLength,
  noLabel,
  onChange,
  placeholder,
  required = true,
  value
}: Props) {
  const field = useFieldContext<string>();

  return (
    <div>
      <label htmlFor={field.name} className={`block leading-6 font-medium ${noLabel ? 'sr-only' : ''}`}>
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          autoFocus={autoFocus}
          maxLength={maxLength}
          required={required}
          value={value ? value : field.state.value}
          onChange={onChange ? onChange : (e) => field.handleChange(e.target.value)}
          name={field.name}
          id={field.name}
          className='pop nice-focus-no-shadow block w-full rounded-xl border-0 bg-white/85 px-3 py-2 text-black ring-1 ring-white/20 liquid-blur transition-shadow duration-300 ease-in-out outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-verdigris/40'
          placeholder={placeholder}
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
}
