import AppStrings from '../../constants/AppStrings';
import type { CarSummary, Customer } from '../../features/bookings/types';
import { formatMoney } from '../../utils/format';
import { AdminCard, DetailRow } from './AdminCard';

const strings = AppStrings.admin.common;

export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <AdminCard title={strings.customer}>
      <DetailRow label={strings.name}>{customer.name}</DetailRow>
      <DetailRow label={strings.email}>
        <a href={`mailto:${customer.email}`} className="text-primary hover:underline">{customer.email}</a>
      </DetailRow>
      <DetailRow label={strings.phone}>
        <a href={`tel:${customer.phone}`} className="text-primary hover:underline">{customer.phone}</a>
      </DetailRow>
    </AdminCard>
  );
}

export function CarSummaryCard({ car }: { car: CarSummary }) {
  return (
    <AdminCard title={strings.car}>
      <img src={car.image} alt="" className="w-full h-32 object-contain rounded-xl bg-surface" />
      <DetailRow label={car.type}>{car.brand}</DetailRow>
      <DetailRow label={AppStrings.carCard.perDay}>{formatMoney(car.pricePerDay)}</DetailRow>
    </AdminCard>
  );
}
