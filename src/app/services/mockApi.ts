// DEMO MODE ONLY (VITE_MOCK_API=true): a fake backend that runs in the browser.
// Cars are saved in localStorage, so add/edit/delete survive a page refresh.
// Delete this file once your real backend is ready.
import { cars as sampleCars, type Car } from '../features/cars/carsData';
import { ApiError } from './api';
import type { CarInput } from './carsService';
import { sampleBookings, samplePayments } from './mockBookingsData';

export const DEMO_USERNAME = 'admin';
export const DEMO_PASSWORD = 'admin123';

const CARS_KEY = 'mockCars';

// Small pause so loading states show, like a real network call
const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

function readCars(): Car[] {
  const saved = localStorage.getItem(CARS_KEY);
  return saved ? JSON.parse(saved) : sampleCars; // first time: start with the 6 sample cars
}

function writeCars(cars: Car[]) {
  localStorage.setItem(CARS_KEY, JSON.stringify(cars));
}

export async function mockLogin(username: string, password: string) {
  await wait();
  if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
    throw new ApiError(401, 'Wrong ID or password');
  }
  return { token: 'demo-token' };
}

export async function mockGetCars() {
  await wait();
  return readCars();
}

export async function mockGetCar(id: string) {
  await wait();
  const car = readCars().find((c) => String(c.id) === id);
  if (!car) throw new ApiError(404, 'Car not found');
  return car;
}

export async function mockCreateCar(input: CarInput) {
  await wait();
  const cars = readCars();
  const car: Car = { ...input, id: Math.max(0, ...cars.map((c) => c.id)) + 1 };
  writeCars([...cars, car]);
  return car;
}

export async function mockUpdateCar(id: string, input: CarInput) {
  await wait();
  const car: Car = { ...input, id: Number(id) };
  writeCars(readCars().map((c) => (String(c.id) === id ? car : c)));
  return car;
}

export async function mockDeleteCar(id: string) {
  await wait();
  writeCars(readCars().filter((c) => String(c.id) !== id));
}

// Instead of uploading to S3: shrink the image and keep it as text (a "data URL").
// Shrinking matters because localStorage only holds about 5 MB in total.
export function mockUploadImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 800 / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext('2d')?.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(img.src);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = () => reject(new Error('Could not read image'));
    img.src = URL.createObjectURL(file);
  });
}

// Bookings & payments (read-only sample data)
export async function mockGetBookings() {
  await wait();
  return sampleBookings;
}

export async function mockGetBooking(id: string) {
  await wait();
  const booking = sampleBookings.find((b) => String(b.id) === id);
  if (!booking) throw new ApiError(404, 'Booking not found');
  return booking;
}

export async function mockGetPayments() {
  await wait();
  return samplePayments;
}

export async function mockGetPayment(id: string) {
  await wait();
  const payment = samplePayments.find((p) => String(p.id) === id);
  if (!payment) throw new ApiError(404, 'Payment not found');
  return payment;
}
