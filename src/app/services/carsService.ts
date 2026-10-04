import type { Car } from '../features/cars/carsData';
import { apiRequest, USE_MOCK_API } from './api';
import * as mock from './mockApi';

// Everything except the id, which the backend creates
export type CarInput = Omit<Car, 'id'>;

// Each function uses the fake backend in demo mode, otherwise your real API
export const getCars = () => (USE_MOCK_API ? mock.mockGetCars() : apiRequest<Car[]>('/cars'));

export const getCar = (id: string) => (USE_MOCK_API ? mock.mockGetCar(id) : apiRequest<Car>(`/cars/${id}`));

export const createCar = (car: CarInput) =>
  USE_MOCK_API
    ? mock.mockCreateCar(car)
    : apiRequest<Car>('/cars', { method: 'POST', body: JSON.stringify(car) });

export const updateCar = (id: string, car: CarInput) =>
  USE_MOCK_API
    ? mock.mockUpdateCar(id, car)
    : apiRequest<Car>(`/cars/${id}`, { method: 'PUT', body: JSON.stringify(car) });

export const deleteCar = (id: string) =>
  USE_MOCK_API ? mock.mockDeleteCar(id) : apiRequest<void>(`/cars/${id}`, { method: 'DELETE' });

type UploadUrlResponse = { uploadUrl: string; fileUrl: string };

// Upload an image to S3 in two steps:
// 1. ask the backend for a one-time "presigned" upload URL
// 2. send the file straight to S3 with that URL
// Returns the image's public URL to save on the car.
export async function uploadImage(file: File) {
  if (USE_MOCK_API) return mock.mockUploadImage(file);

  const { uploadUrl, fileUrl } = await apiRequest<UploadUrlResponse>('/uploads', {
    method: 'POST',
    body: JSON.stringify({ fileName: file.name, contentType: file.type }),
  });

  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  });
  if (!response.ok) throw new Error('Image upload failed');

  return fileUrl;
}
