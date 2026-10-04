import type { InputHTMLAttributes } from 'react';
import Text from './Text';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

// Label + input (+ optional hint underneath), used in admin forms
export default function TextField({ label, hint, className = '', ...rest }: TextFieldProps) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <Text variant="small" className="font-semibold">{label}</Text>
      <input
        className="w-full bg-input rounded-xl px-4 py-2.5 text-base text-text-dark border border-text-dark/10 placeholder:text-gray-text file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:text-text-light file:px-3 file:py-1 file:cursor-pointer"
        {...rest}
      />
      {hint && <Text variant="small" className="text-text-dark/50">{hint}</Text>}
    </label>
  );
}
