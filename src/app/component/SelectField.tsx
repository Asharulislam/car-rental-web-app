import type { SelectHTMLAttributes } from 'react';
import AppImages from '../constants/AppImages';

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder: string;
  options: string[];
};

export default function SelectField({
  placeholder,
  options,
  className = '',
  ...rest
}: SelectFieldProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        defaultValue=""
        aria-label={placeholder}
        className="w-full appearance-none bg-input rounded-xl px-4 py-[9px] pr-10 text-base leading-5 text-gray-text cursor-pointer"
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img
        src={AppImages.chevronDown}
        alt=""
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4"
      />
    </div>
  );
}
