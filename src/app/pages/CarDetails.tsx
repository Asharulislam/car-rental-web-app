import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../component/Button";
import Heading from "../component/Heading";
import SpecCard from "../component/SpecCard";
import Text from "../component/Text";
import AppImages from "../constants/AppImages";
import AppRoutes from "../constants/AppRoutes";
import AppStrings from "../constants/AppStrings";
import CarCard from "../features/cars/CarCard";
import { cars, type Car } from "../features/cars/carsData";

const strings = AppStrings.carDetails;

export default function CarDetails() {
  // Read :id from the URL, e.g. /vehicles/3 → "3"
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <Text variant="muted" className="text-center">{strings.notFound}</Text>
      </section>
    );
  }

  const otherCars = cars.filter((c) => c.id !== car.id);

  return (
    <>
      {/* key={car.id}: when you open another car, this part starts fresh (first image selected again) */}
      <CarInfo key={car.id} car={car} />

      {/* Other cars: 1 column on phone, 2 on tablet, 3 on desktop */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading level={2}>{strings.otherCars}</Heading>
          <Link to={AppRoutes.vehicles} className="flex items-center gap-2 text-xl font-bold">
            {AppStrings.home.viewAll}
            <img src={AppImages.arrowRight} alt="" className="size-6" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherCars.map((other) => (
            <CarCard key={other.id} car={other} />
          ))}
        </div>
      </section>
    </>
  );
}

function CarInfo({ car }: { car: Car }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const specs = [
    { icon: AppImages.gear, label: strings.gearBox, value: car.transmission },
    { icon: AppImages.fuel, label: strings.fuel, value: car.fuel },
    { icon: AppImages.door, label: strings.doors, value: car.doors },
    { icon: AppImages.airConditioner, label: strings.airConditioner, value: car.airConditioner ? strings.yes : strings.no },
    { icon: AppImages.seats, label: strings.seats, value: car.seats },
    { icon: AppImages.distance, label: strings.distance, value: car.distance },
  ];

  return (
    // Stacked on phone/tablet, two columns on desktop
    <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 pt-10 xl:pt-15 pb-15 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
      {/* Left: name, price, images */}
      <div>
        <Heading level={2}>{car.brand}</Heading>
        <p className="mt-5 flex items-baseline gap-1">
          <span className="text-[32px] font-bold text-primary">${car.pricePerDay}</span>
          <span className="text-sm text-text-dark/60">{strings.perDay}</span>
        </p>

        <img
          src={car.gallery[selectedImage]}
          alt={`${car.brand} ${car.type}`}
          className="mt-8 w-full h-60 md:h-75 object-contain"
        />

        {/* Thumbnails: click one to show it above */}
        <div className="mt-5 flex gap-4 md:gap-6">
          {car.gallery.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`${strings.showImage} ${index + 1}`}
              className={`w-28 md:w-35 h-20 md:h-25 rounded-xl overflow-hidden bg-surface cursor-pointer ${
                index === selectedImage ? "ring-2 ring-primary" : ""
              }`}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Right: specs, button, equipment */}
      <div>
        <Heading level={4}>{strings.technicalSpecification}</Heading>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {specs.map((spec) => (
            <SpecCard key={spec.label} {...spec} />
          ))}
        </div>

        <Button size="lg" className="mt-12 w-full sm:w-72.5">
          {strings.rentACar}
        </Button>

        <Heading level={4} className="mt-12">{strings.carEquipment}</Heading>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 w-fit">
          {car.equipment.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <img src={AppImages.check} alt="" className="size-5" />
              <Text variant="small" className="text-text-dark/60">{item}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
