import AppStrings from '../../constants/AppStrings';
import type { BookingStatus, PaymentStatus } from '../../features/bookings/types';

type Status = BookingStatus | PaymentStatus;

// Green = good, orange = waiting, red = problem, grey = finished/neutral
const colors: Record<Status, string> = {
  paid: 'bg-success/15 text-success',
  confirmed: 'bg-success/15 text-success',
  pending: 'bg-secondary/20 text-text-dark',
  failed: 'bg-danger/15 text-danger',
  cancelled: 'bg-danger/15 text-danger',
  refunded: 'bg-text-dark/10 text-text-dark/70',
  completed: 'bg-primary/15 text-primary',
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${colors[status]}`}>
      {AppStrings.admin.status[status]}
    </span>
  );
}
