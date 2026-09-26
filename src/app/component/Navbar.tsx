import { Link, NavLink } from 'react-router-dom';
import AppImages from '../constants/AppImages';
import AppRoutes from '../constants/AppRoutes';
import AppStrings from '../constants/AppStrings';

const links = [
  { to: AppRoutes.home, label: AppStrings.nav.home },
  { to: AppRoutes.vehicles, label: AppStrings.nav.vehicles },
  { to: AppRoutes.about, label: AppStrings.nav.about },
  { to: AppRoutes.contact, label: AppStrings.nav.contact },
];

export default function Navbar() {
  return (
    <header className="max-w-[1440px] mx-auto flex items-center justify-between px-[72px] py-7">
      {/* Left: logo */}
      <Link to={AppRoutes.home} className="flex items-center gap-3">
        <img src={AppImages.logo} alt={AppStrings.appName} className="size-12" />
        <span className="font-inter font-bold text-base">{AppStrings.appName}</span>
      </Link>

      {/* Middle: menu */}
      <nav className="flex gap-5">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `font-inter text-lg px-3 py-1 ${isActive ? 'font-bold' : 'font-medium'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Right: phone */}
      <div className="flex items-center gap-3">
        <div className="bg-primary rounded-full size-10 flex items-center justify-center">
          <img src={AppImages.phone} alt="" className="size-6" />
        </div>
        <div className="leading-tight">
          <p>{AppStrings.contact.needHelp}</p>
          <p className="font-semibold">{AppStrings.contact.phone}</p>
        </div>
      </div>
    </header>
  );
}