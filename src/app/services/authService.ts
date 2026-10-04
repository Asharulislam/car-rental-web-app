import { apiRequest, USE_MOCK_API } from './api';
import { clearToken, saveToken } from './authStorage';
import { mockLogin } from './mockApi';

type LoginResponse = { token: string };

// POST /auth/login  { username, password }  →  { token }
export async function login(username: string, password: string) {
  const { token } = USE_MOCK_API
    ? await mockLogin(username, password)
    : await apiRequest<LoginResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
  saveToken(token);
}

export function logout() {
  clearToken();
}
