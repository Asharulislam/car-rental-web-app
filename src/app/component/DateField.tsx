import { useState, type InputHTMLAttributes } from 'react';
import AppImages from '../constants/AppImages';

type DateFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  placeholder: string;
};

export default function DateField({ placeholder, className = '', ...rest }: DateFieldProps) {
  // Shown as a text box (so the placeholder is visible) until the user picks a date
  const [isDate, setIsDate] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type={isDate ? 'date' : 'text'}
        placeholder={placeholder}
        aria-label={placeholder}
        onFocus={() => setIsDate(true)}
        onBlur={(e) => {
          if (!e.target.value) setIsDate(false);
        }}
        onClick={(e) => {
          try {
            e.currentTarget.showPicker();
          } catch {
            //
          }
        }}
        className="w-full bg-input rounded-xl px-4 py-2.25 pr-10 text-base leading-5 text-text-dark placeholder:text-gray-text cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden"
        {...rest}
      />
      <img
        src={AppImages.calendar}
        alt=""
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4"
      />
    </div>
  );
}
