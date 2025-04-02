interface Props {
  autoFocus?: boolean;
  label: string;
  name: string;
  noLabel?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  value: string;
}

export default function TextArea({
  autoFocus,
  label,
  name,
  noLabel,
  onChange,
  placeholder,
  required = true,
  value
}: Props) {
  return (
    <div className='w-full'>
      <label htmlFor={name} className={`${noLabel ? 'sr-only' : ''} block leading-6 font-medium`}>
        {label}
      </label>
      <div className={`${noLabel ? '' : 'mt-2'}`}>
        <textarea
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          required={required}
          id={name}
          name={name}
          placeholder={placeholder}
          className='ring-dark-cyan focus:ring-caribbean-current block w-full rounded-lg border-0 bg-white px-3 py-2 text-black ring-2 transition-all duration-200 ease-in-out ring-inset placeholder:text-gray-400 focus:shadow-[3px_3px_0px_rgba(255,255,255,1)] focus:outline-hidden focus:ring-inset'
        />
      </div>
    </div>
  );
}
