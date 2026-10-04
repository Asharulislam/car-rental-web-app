import type { Booking, Payment } from '../features/bookings/types';
import { apiRequest, USE_MOCK_API } from './api';
import * as mock from './mockApi';

// Read-only for the admin: bookings and payments are created on the user side

export const getBookings = () =>
  USE_MOCK_API ? mock.mockGetBookings() : apiRequest<Booking[]>('/bookings');

export const getBooking = (id: string) =>
  USE_MOCK_API ? mock.mockGetBooking(id) : apiRequest<Booking>(`/bookings/${id}`);

export const getPayments = () =>
  USE_MOCK_API ? mock.mockGetPayments() : apiRequest<Payment[]>('/payments');

export const getPayment = (id: string) =>
  USE_MOCK_API ? mock.mockGetPayment(id) : apiRequest<Payment>(`/payments/${id}`);
