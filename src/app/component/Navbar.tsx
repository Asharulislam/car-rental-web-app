import { useState } from 'react';
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

function PhoneContact() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-primary rounded-full size-10 flex items-center justify-center">
        <img src={AppImages.phone} alt="" className="size-6" />
      </div>
      <div className="leading-tight">
        <p>{AppStrings.contact.needHelp}</p>
        <p className="font-semibold">{AppStrings.contact.phone}</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative max-w-360 mx-auto flex items-center justify-between px-4 md:px-8 xl:px-18 py-5 xl:py-7">
      {/* Left: logo */}
      <Link to={AppRoutes.home} className="flex items-center gap-3">
        <img src={AppImages.logo} alt={AppStrings.appName} className="size-10 lg:size-12" />
        <span className="font-inter font-bold text-base">{AppStrings.appName}</span>
      </Link>

      {/* Middle: menu (desktop) */}
      <nav className="hidden lg:flex gap-5">
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

      {/* Right: phone (desktop) */}
      <div className="hidden lg:block">
        <PhoneContact />
      </div>

      {/* Hamburger button (phone/tablet) */}
      <button
        type="button"
        className="lg:hidden p-2 cursor-pointer"
        aria-label={isMenuOpen ? AppStrings.nav.closeMenu : AppStrings.nav.openMenu}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={isMenuOpen ? AppImages.close : AppImages.menu} alt="" className="size-6" />
      </button>

      {/* Dropdown menu (phone/tablet) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 z-50 bg-white shadow-lg px-4 md:px-8 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-inter text-lg py-2 ${isActive ? 'font-bold' : 'font-medium'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 mt-2 border-t border-input">
            <PhoneContact />
          </div>
        </div>
      )}
    </header>
  );
}
