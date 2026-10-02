import { useSearchParams } from "react-router-dom";
import FilterPill from "../component/FilterPill";
import Heading from "../component/Heading";
import Text from "../component/Text";
import AppStrings from "../constants/AppStrings";
import { cars } from "../features/cars/carsData";
import CarCard from "../features/cars/CarCard";
import { vehicleTypes } from "../features/cars/vehicleTypes";

export default function Vehicles() {
  // The selected type lives in the URL (?type=sedan), so footer links can open a filtered page
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = searchParams.get("type") ?? "";

  const selectType = (type: string) => {
    const next = new URLSearchParams(searchParams);
    if (type) next.set("type", type);
    else next.delete("type");
    setSearchParams(next);
  };

  const filteredCars = selectedType
    ? cars.filter((car) => car.type.toLowerCase() === selectedType)
    : cars;

  return (
    <>
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 text-center pt-5">
        <Heading level={2}>{AppStrings.vehicles.selectVehicle}</Heading>

        {/* Filter pills: wrap onto more lines on small screens */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-6">
          <FilterPill
            label={AppStrings.vehicles.allVehicles}
            isActive={selectedType === ""}
            onClick={() => selectType("")}
          />
          {vehicleTypes.map((type) => (
            <FilterPill
              key={type.id}
              label={type.label}
              icon={type.icon}
              isActive={selectedType === type.id}
              onClick={() => selectType(type.id)}
            />
          ))}
        </div>
      </section>

      {/* Cars: 1 column on phone, 2 on tablet, 3 on desktop */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <Text variant="muted" className="text-center">
            {AppStrings.vehicles.noCars}
          </Text>
        )}
      </section>
    </>
  );
}
