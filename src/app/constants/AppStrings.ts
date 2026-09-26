const AppStrings = {
  appName: "Car Rental",

  nav: {
    home: "Home",
    vehicles: "Vehicles",
    about: "About Us",
    contact: "Contact Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  contact: {
    needHelp: "Need help?",
    phone: "+996 247-1680",
  },

  home: {
    heroTitle: "Experience the road like never before",
    heroText:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
    viewAllCars: "View all cars",
  },

  bookingForm: {
    title: "Book your car",
    carType: "Car type",
    placeOfRental: "Place of rental",
    placeOfReturn: "Place of return",
    rentalDate: "Rental date",
    returnDate: "Return date",
    bookNow: "Book now",
  },
} as const;

export default AppStrings;
