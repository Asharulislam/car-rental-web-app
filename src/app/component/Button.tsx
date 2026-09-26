import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
};

const variants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};

export default function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`font-inter font-semibold text-base h-10 px-7 rounded-xl flex items-center justify-center cursor-pointer ${fullWidth ? 'w-full' : 'w-fit'} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
