import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import AppImages from '../../constants/AppImages';
import AppRoutes from '../../constants/AppRoutes';
import AppStrings from '../../constants/AppStrings';
import { logout } from '../../services/authService';
import Button from '../Button';

const strings = AppStrings.admin;

const tabs = [
  { to: AppRoutes.admin, label: strings.nav.cars, end: true }, // `end`: only exactly /admin, not /admin/bookings
  { to: AppRoutes.adminBookings, label: strings.nav.bookings, end: false },
  { to: AppRoutes.adminPayments, label: strings.nav.payments, end: false },
];

// Frame for every admin page: top bar + page content (like Layout, but without the public Navbar/Footer)
export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(AppRoutes.adminLogin, { replace: true });
  };

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-white border-b border-text-dark/10">
        <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 h-18 flex items-center justify-between gap-4">
          <Link to={AppRoutes.admin} className="flex items-center gap-3">
            <img src={AppImages.logo} alt="" className="size-9" />
            <span className="font-inter font-bold">
              {AppStrings.appName} <span className="text-primary">· {strings.panelTitle}</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to={AppRoutes.home} className="hidden sm:block text-sm hover:text-primary">
              {strings.viewSite}
            </Link>
            <Button onClick={handleLogout}>{strings.logout}</Button>
          </div>
        </div>

        {/* Section tabs: Cars · Bookings · Payments */}
        <nav className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `py-3 border-b-2 font-semibold whitespace-nowrap ${
                  isActive ? 'border-primary text-primary' : 'border-transparent text-text-dark/60 hover:text-text-dark'
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-10">
        <Outlet />
      </main>
    </div>
  );
}
