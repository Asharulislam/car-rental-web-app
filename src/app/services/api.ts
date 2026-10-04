import AppRoutes from '../constants/AppRoutes';
import { clearToken, getToken } from './authStorage';

// Your backend's address, from .env.local (see .env.example)
const API_URL = import.meta.env.VITE_API_URL ?? '';

// Demo mode: VITE_MOCK_API=true in .env.local → use the fake backend in mockApi.ts
export const USE_MOCK_API = import.meta.env.VITE_MOCK_API === 'true';

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// One place for every API call: adds the base URL, JSON headers and the admin's login token
export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  // Token expired or invalid → log out and go back to the login screen
  if (response.status === 401 && token) {
    clearToken();
    window.location.assign(AppRoutes.adminLogin);
  }

  if (!response.ok) {
    throw new ApiError(response.status, `Request failed: ${response.status}`);
  }

  // 204 No Content (e.g. after DELETE) has no body
  return (response.status === 204 ? undefined : await response.json()) as T;
}
