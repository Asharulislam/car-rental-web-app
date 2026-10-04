// DEMO MODE ONLY: sample bookings and payments for the admin panel.
// Delete this file together with mockApi.ts once your real backend is ready.
import AppImages from '../constants/AppImages';
import type { Booking, CarSummary, Customer, Payment } from '../features/bookings/types';

const customers: Customer[] = [
  { id: 1, name: 'Emanuel Boyle', email: 'emanuel@example.com', phone: '+1 555 0101' },
  { id: 2, name: 'River Graves', email: 'river@example.com', phone: '+1 555 0102' },
  { id: 3, name: 'Ryder Malone', email: 'ryder@example.com', phone: '+1 555 0103' },
  { id: 4, name: 'Sara Ahmed', email: 'sara@example.com', phone: '+1 555 0104' },
];

const car = (id: number, brand: string, type: string, pricePerDay: number): CarSummary => ({
  id,
  brand,
  type,
  pricePerDay,
  image: AppImages.carPlaceholder,
});

const mercedes = car(1, 'Mercedes', 'Sedan', 25);
const porsche = car(4, 'Porsche', 'SUV', 40);
const toyota = car(5, 'Toyota', 'Sedan', 35);
const sport = car(2, 'Mercedes', 'Sport', 50);

export const sampleBookings: Booking[] = [
  { id: 1001, customer: customers[0], car: porsche, placeOfRental: 'Airport', placeOfReturn: 'City Center', rentalDate: '2026-10-05', returnDate: '2026-10-08', days: 3, totalPrice: 120, status: 'confirmed', paymentId: 5001, createdAt: '2026-10-01T09:15:00Z' },
  { id: 1002, customer: customers[1], car: mercedes, placeOfRental: 'City Center', placeOfReturn: 'City Center', rentalDate: '2026-10-10', returnDate: '2026-10-12', days: 2, totalPrice: 50, status: 'pending', paymentId: 5002, createdAt: '2026-10-02T14:40:00Z' },
  { id: 1003, customer: customers[2], car: sport, placeOfRental: 'Train Station', placeOfReturn: 'Airport', rentalDate: '2026-09-20', returnDate: '2026-09-25', days: 5, totalPrice: 250, status: 'completed', paymentId: 5003, createdAt: '2026-09-15T11:05:00Z' },
  { id: 1004, customer: customers[3], car: toyota, placeOfRental: 'Airport', placeOfReturn: 'Airport', rentalDate: '2026-10-15', returnDate: '2026-10-16', days: 1, totalPrice: 35, status: 'cancelled', paymentId: 5004, createdAt: '2026-10-03T08:20:00Z' },
  { id: 1005, customer: customers[0], car: toyota, placeOfRental: 'City Center', placeOfReturn: 'Train Station', rentalDate: '2026-10-20', returnDate: '2026-10-24', days: 4, totalPrice: 140, status: 'pending', paymentId: null, createdAt: '2026-10-04T16:55:00Z' },
];

export const samplePayments: Payment[] = [
  { id: 5001, bookingId: 1001, customer: customers[0], car: porsche, amount: 120, currency: 'USD', method: 'Card', provider: 'Stripe', transactionId: 'pi_3QxA1b2C3d4E5f6G', status: 'paid', paidAt: '2026-10-01T09:16:30Z', createdAt: '2026-10-01T09:16:00Z' },
  { id: 5002, bookingId: 1002, customer: customers[1], car: mercedes, amount: 50, currency: 'USD', method: 'Card', provider: 'Stripe', transactionId: 'pi_3QxB7h8I9j0K1l2M', status: 'pending', paidAt: null, createdAt: '2026-10-02T14:41:00Z' },
  { id: 5003, bookingId: 1003, customer: customers[2], car: sport, amount: 250, currency: 'USD', method: 'PayPal', provider: 'PayPal', transactionId: 'PAYID-NXY12345AB', status: 'paid', paidAt: '2026-09-15T11:06:10Z', createdAt: '2026-09-15T11:06:00Z' },
  { id: 5004, bookingId: 1004, customer: customers[3], car: toyota, amount: 35, currency: 'USD', method: 'Card', provider: 'Stripe', transactionId: 'pi_3QxC3n4O5p6Q7r8S', status: 'refunded', paidAt: '2026-10-03T08:21:00Z', createdAt: '2026-10-03T08:20:30Z' },
];
