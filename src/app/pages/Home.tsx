import { Link } from 'react-router-dom';
import AppImages from '../constants/AppImages';
import AppRoutes from '../constants/AppRoutes';
import AppStrings from '../constants/AppStrings';
import Button from '../component/Button';
import FeatureItem from '../component/FeatureItem';
import Heading from '../component/Heading';
import Text from '../component/Text';
import BookingForm from '../features/bookings/BookingForm';
import CarCard from '../features/cars/CarCard';
import { cars } from '../features/cars/carsData';

const features = [
  { icon: AppImages.location, ...AppStrings.home.features.availability },
  { icon: AppImages.carOutline, ...AppStrings.home.features.comfort },
  { icon: AppImages.wallet, ...AppStrings.home.features.savings },
];

export default function Home() {
  return (
    <>
      {/* Hero banner */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18">
        <div className="relative bg-primary rounded-[20px] overflow-hidden">
          {/* Banner stretches behind the content, whatever height it needs */}
          <img
            src={AppImages.banner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Stacked on phone/tablet, side by side on desktop */}
          <div className="relative px-6 py-10 md:px-10 xl:px-18 xl:min-h-165 flex flex-col xl:flex-row items-center xl:justify-between gap-10">
            <div className="w-full xl:max-w-171.5 text-text-light">
              <Heading>{AppStrings.home.heroTitle}</Heading>
              <Text className="mt-6 max-w-116">{AppStrings.home.heroText}</Text>
              <Button variant="secondary" className="mt-8">
                {AppStrings.home.viewAllCars}
              </Button>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      {/* Features: 1 column on phone, 3 side by side from tablet */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Choose the car: 1 column on phone, 2 on tablet, 3 on desktop */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading level={2} className="max-w-130">
            {AppStrings.home.chooseCarTitle}
          </Heading>
          <Link to={AppRoutes.vehicles} className="flex items-center gap-2 text-xl font-bold">
            {AppStrings.home.viewAll}
            <img src={AppImages.arrowRight} alt="" className="size-6" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}
