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

    features: {
      availability: {
        title: "Availability",
        text: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
      },
      comfort: {
        title: "Comfort",
        text: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
      },
      savings: {
        title: "Savings",
        text: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
      },
    },

    chooseCarTitle: "Choose the car that suits you",
    viewAll: "View All",

    facts: {
      title: "Facts in numbers",
      text: "Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum",
      cars: { value: "540+", label: "Cars" },
      customers: { value: "20k+", label: "Customers" },
      years: { value: "25+", label: "Years" },
      miles: { value: "20m+", label: "Miles" },
    },

    downloadApp: {
      title: "Download mobile app",
      text: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna",
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play",
      phones: "Car Rental app on two phones",
    },

    citySearch: {
      title: "Enjoy every mile with adorable companionship.",
      text: "Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat",
      placeholder: "City",
      search: "Search",
    },
  },

  vehicles: {
    selectVehicle: "Select a vehicle group",
  },

  footer: {
    about:
      "Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem turpis euismod.",
    address: { label: "Address", value: "Oxford Ave. Cary, NC 27511" },
    email: { label: "Email", value: "nwiger@yahoo.com" },
    phone: { label: "Phone", value: "+537 547-6401" },
    usefulLinks: "Useful links",
    gallery: "Gallery",
    blog: "Blog",
    faq: "F.A.Q",
    vehicles: "Vehicles",
    vehicleTypes: ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"],
    downloadApp: "Download App",
    copyright: "Design by Ashar",
  },

  carCard: {
    perDay: "per day",
    airConditioner: "Air Conditioner",
    viewDetails: "View Details",
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
