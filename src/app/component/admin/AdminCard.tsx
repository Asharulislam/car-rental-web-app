import type { ReactNode } from 'react';
import Heading from '../Heading';
import Text from '../Text';

// White box with a title, used on the details pages
export function AdminCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-white rounded-[20px] p-6">
      <Heading level={5}>{title}</Heading>
      <dl className="mt-4 flex flex-col gap-3">{children}</dl>
    </section>
  );
}

// One "label: value" line inside an AdminCard
export function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <dt><Text variant="small" className="text-text-dark/60">{label}</Text></dt>
      <dd className="text-sm font-semibold text-right break-all">{children}</dd>
    </div>
  );
}
