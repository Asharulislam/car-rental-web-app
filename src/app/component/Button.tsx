import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
};

const variants = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};

const sizes = {
  md: 'h-10',     // 40px
  lg: 'h-12.5',   // 50px
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`font-inter font-semibold text-base ${sizes[size]} px-7 rounded-xl flex items-center justify-center cursor-pointer ${fullWidth ? 'w-full' : 'w-fit'} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
