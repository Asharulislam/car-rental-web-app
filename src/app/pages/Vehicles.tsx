import Heading from "../component/Heading";
import AppStrings from "../constants/AppStrings";
import { cars } from "../features/cars/carsData";
import CarCard from "../features/cars/CarCard";

export default function Vehicles() {
  return (
    <>
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 text-center pt-5">
        <Heading level={2}>{AppStrings.vehicles.selectVehicle}</Heading>
      </section>

      {/* Choose the car: 1 column on phone, 2 on tablet, 3 on desktop */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}
