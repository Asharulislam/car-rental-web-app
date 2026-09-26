import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

const variants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`font-inter font-semibold text-base px-7 py-3 rounded-xl w-fit cursor-pointer ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
