import FieldErrors from './FieldErrors';

import { useFieldContext } from './formContexts';

interface Props {
  autoFocus?: boolean;
  label: string;
  maxLength?: number;
  min?: string;
  noLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  step?: string;
  type?: 'email' | 'password' | 'number' | 'text' | 'tel' | 'date';
  value?: string;
}

export default function TextField({
  autoFocus,
  label,
  maxLength,
  min,
  noLabel,
  onChange,
  placeholder,
  required = true,
  step,
  type = 'text',
  value
}: Props) {
  const field = useFieldContext<string>();

  return (
    <div>
      <label htmlFor={field.name} className={`block leading-6 font-medium ${noLabel ? 'sr-only' : ''}`}>
        {label}
      </label>
      <div className='mt-2'>
        <input
          step={step}
          autoFocus={autoFocus}
          maxLength={maxLength}
          min={min}
          onChange={onChange ? onChange : (e) => field.handleChange(e.target.value)}
          value={value ? value : field.state.value}
          required={required}
          id={field.name}
          name={field.name}
          type={type}
          placeholder={placeholder}
          className='pop nice-focus-no-shadow block w-full rounded-xl border-0 bg-white/85 px-3 py-2 text-black ring-1 ring-white/20 liquid-blur transition-shadow duration-300 ease-in-out outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-verdigris/40'
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
}
