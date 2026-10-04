const AppRoutes = {
  home: '/',
  vehicles: '/vehicles',
  carDetails: '/vehicles/:id', // :id is filled in with the car's id, e.g. /vehicles/3
  about: '/about',
  contact: '/contact',
  gallery: '/gallery',
  blog: '/blog',
  faq: '/faq',

  // Admin panel (no Navbar/Footer)
  adminLogin: '/admin/login',
  admin: '/admin',
  adminNewCar: '/admin/cars/new',
  adminEditCar: '/admin/cars/:id/edit',
  adminBookings: '/admin/bookings',
  adminBookingDetails: '/admin/bookings/:id',
  adminPayments: '/admin/payments',
  adminPaymentDetails: '/admin/payments/:id',
} as const;

export default AppRoutes;
