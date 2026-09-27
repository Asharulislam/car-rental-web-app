import AppImages from '../../constants/AppImages';
import AppStrings from '../../constants/AppStrings';
import Button from '../../component/Button';
import Heading from '../../component/Heading';
import Text from '../../component/Text';
import type { Car } from './carsData';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const specs = [
    { icon: AppImages.gear, label: car.transmission },
    { icon: AppImages.fuel, label: car.fuel },
    ...(car.airConditioner ? [{ icon: AppImages.airConditioner, label: AppStrings.carCard.airConditioner }] : []),
  ];

  return (
    <article className="bg-surface rounded-[20px] p-6 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <img src={car.image} alt={`${car.brand} ${car.type}`} className="w-full h-60 object-contain" />

        <div className="flex flex-col gap-10">
          {/* Name + price */}
          <div className="flex items-start justify-between">
            <div>
              <Heading level={4}>{car.brand}</Heading>
              <Text className="mt-1 text-text-dark/60">{car.type}</Text>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-primary">${car.pricePerDay}</p>
              <Text variant="small" className="mt-1 text-text-dark/60">
                {AppStrings.carCard.perDay}
              </Text>
            </div>
          </div>

          {/* Specs: wrap onto 2 lines on narrow cards */}
          <ul className="flex flex-wrap xl:justify-between gap-x-4 gap-y-2">
            {specs.map((spec) => (
              <li key={spec.label} className="flex items-center gap-2">
                <img src={spec.icon} alt="" className="size-6" />
                <Text className="text-text-dark/60">{spec.label}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button size="lg" fullWidth>
        {AppStrings.carCard.viewDetails}
      </Button>
    </article>
  );
}
