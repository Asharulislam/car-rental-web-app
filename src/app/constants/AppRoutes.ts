const AppRoutes = {
  home: '/',
  vehicles: '/vehicles',
  carDetails: '/vehicles/:id', // :id is filled in with the car's id, e.g. /vehicles/3
  about: '/about',
  contact: '/contact',
  gallery: '/gallery',
  blog: '/blog',
  faq: '/faq',
} as const;

export default AppRoutes;
