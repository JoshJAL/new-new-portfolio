import FieldErrors from './FieldErrors';

import { useFieldContext } from './formContexts';

const INPUT_CLASSES =
  'pop nice-focus-no-shadow block w-full rounded-xl border-0 bg-white/85 px-3 py-2 text-black ring-1 ring-white/20 liquid-blur transition-shadow duration-300 ease-in-out outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-verdigris/40';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  label: string;
  noLabel?: boolean;
}

export default function TextField({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  className,
  id,
  label,
  noLabel,
  onBlur,
  onChange,
  required = true,
  type = 'text',
  value,
  ...inputProps
}: TextFieldProps) {
  const field = useFieldContext<string>();
  const inputId = id ?? field.name;
  const errorId = `${inputId}-errors`;
  const hasErrors = field.state.meta.isTouched && field.state.meta.errors.length > 0;
  const describedBy = [ariaDescribedBy, hasErrors ? errorId : undefined].filter(Boolean).join(' ') || undefined;
  const inputClassName = [INPUT_CLASSES, className].filter(Boolean).join(' ');

  return (
    <div>
      <label htmlFor={inputId} className={`block leading-6 font-medium ${noLabel ? 'sr-only' : ''}`}>
        {label}
      </label>
      <div className='mt-2'>
        <input
          {...inputProps}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid ?? (hasErrors ? true : undefined)}
          className={inputClassName}
          id={inputId}
          name={field.name}
          onBlur={(event) => {
            field.handleBlur();
            onBlur?.(event);
          }}
          onChange={(event) => {
            field.handleChange(event.target.value);
            onChange?.(event);
          }}
          required={required}
          type={type}
          value={value ?? field.state.value}
        />
      </div>
      <FieldErrors id={errorId} meta={field.state.meta} />
    </div>
  );
}
