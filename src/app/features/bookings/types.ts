import type { Car } from '../cars/carsData';

// The person who booked (comes from the user side when they book and pay)
export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

// Just the car details a booking or payment needs to show
export type CarSummary = Pick<Car, 'id' | 'brand' | 'type' | 'image' | 'pricePerDay'>;

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type Booking = {
  id: number;
  customer: Customer;
  car: CarSummary;
  placeOfRental: string;
  placeOfReturn: string;
  rentalDate: string; // ISO date, e.g. "2026-10-12"
  returnDate: string;
  days: number;
  totalPrice: number;
  status: BookingStatus;
  paymentId: number | null; // null = not paid yet
  createdAt: string; // ISO date-time
};

export type PaymentStatus = 'paid' | 'pending' | 'failed' | 'refunded';

export type Payment = {
  id: number;
  bookingId: number;
  customer: Customer;
  car: CarSummary;
  amount: number;
  currency: string; // e.g. "USD"
  method: string; // e.g. "Card", "PayPal"
  provider: string; // e.g. "Stripe"
  transactionId: string; // the payment provider's reference
  status: PaymentStatus;
  paidAt: string | null; // ISO date-time, null if not paid
  createdAt: string;
};
