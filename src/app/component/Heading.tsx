import type { HTMLAttributes } from 'react';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3;
};

const sizes = {
  1: 'text-4xl md:text-5xl xl:text-6xl font-bold', // 36px phone → 60px desktop (Figma)
  2: 'text-[28px] font-semibold', // 28px — form / card titles (Figma)
  3: 'text-2xl font-semibold',   // 24px — card titles
};

export default function Heading({
  level = 1,
  className = '',
  children,
  ...rest
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={`${sizes[level]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
