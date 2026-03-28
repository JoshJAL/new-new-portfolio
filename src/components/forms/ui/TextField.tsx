import { FieldErrors } from '@/components/forms/ui/FieldErrors';

import { useFieldContext } from '@/components/forms/ui';

interface Props {
  autoFocus?: boolean;
  label: string;
  min?: string;
  noLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  step?: string;
  type?: 'email' | 'password' | 'number' | 'text' | 'tel' | 'date';
  value?: string;
}

export function TextField({
  autoFocus,
  label,
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
          min={min}
          onChange={onChange ? onChange : (e) => field.handleChange(e.target.value)}
          value={value ? value : field.state.value}
          required={required}
          id={field.name}
          name={field.name}
          type={type}
          placeholder={placeholder}
          className='pop nice-focus-no-shadow block w-full rounded-xl border-0 bg-white/85 px-3 py-2 text-black ring-1 ring-white/20 liquid-blur transition-all duration-300 ease-in-out outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-verdigris/40'
        />
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
}
