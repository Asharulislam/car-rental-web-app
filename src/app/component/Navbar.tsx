import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/car.svg';
import phone from '../../assets/phone.svg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/vehicles/1', label: 'Details' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  return (
    <header className="max-w-[1440px] mx-auto flex items-center justify-between px-[72px] py-7">
      {/* Left: logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Car Rental" className="size-12" />
        <span className="font-inter font-bold text-base">Car Rental</span>
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
          <img src={phone} alt="" className="size-6" />
        </div>
        <div className="leading-tight">
          <p>Need help?</p>
          <p className="font-semibold">+996 247-1680</p>
        </div>
      </div>
    </header>
  );
}