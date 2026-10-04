import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import AppRoutes from '../../constants/AppRoutes';
import { isLoggedIn } from '../../services/authStorage';

// Wrap admin pages with this: not logged in → sent to the login screen
export default function RequireAuth({ children }: { children: ReactNode }) {
  if (!isLoggedIn()) {
    return <Navigate to={AppRoutes.adminLogin} replace />;
  }
  return children;
}
