import type { HTMLAttributes } from 'react';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'body' | 'small' | 'muted';
};

const variants = {
  body: 'text-base',                  // 16px — normal paragraphs
  small: 'text-sm',                   // 14px
  muted: 'text-base text-gray-text',  // 16px grey
};

export default function Text({
  variant = 'body',
  className = '',
  children,
  ...rest
}: TextProps) {
  return (
    <p className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </p>
  );
}
