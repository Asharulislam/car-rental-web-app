import { useEffect, useState } from "react";
import { generatePath, Link, useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import type { Car } from "../../features/cars/carsData";
import { deleteCar, getCars } from "../../services/carsService";

const strings = AppStrings.admin.cars;

export default function AdminCars() {
  const navigate = useNavigate();
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Load the cars once, when the page opens
  useEffect(() => {
    getCars()
      .then(setCars)
      .catch(() => setError(strings.loadFailed))
      .finally(() => setIsLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm(strings.confirmDelete)) return;
    try {
      await deleteCar(String(id));
      setCars((current) => current.filter((car) => car.id !== id));
    } catch {
      window.alert(strings.deleteFailed);
    }
  };

  const editPath = (id: number) => generatePath(AppRoutes.adminEditCar, { id: String(id) });

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Heading level={3}>{strings.title}</Heading>
        <Button variant="secondary" onClick={() => navigate(AppRoutes.adminNewCar)}>
          + {strings.addCar}
        </Button>
      </div>

      <div className="mt-8 bg-white rounded-[20px] overflow-hidden">
        {isLoading && <Text variant="muted" className="p-8 text-center">{strings.loading}</Text>}
        {error && <Text className="p-8 text-center text-red-600">{error}</Text>}
        {!isLoading && !error && cars.length === 0 && (
          <Text variant="muted" className="p-8 text-center">{strings.empty}</Text>
        )}

        {cars.length > 0 && (
          // Scrolls sideways on small screens instead of squashing the columns
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 text-left">
              <thead className="bg-input text-sm text-text-dark/60">
                <tr>
                  <th className="px-6 py-4 font-semibold">{strings.columns.image}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.car}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.type}</th>
                  <th className="px-6 py-4 font-semibold">{strings.columns.price}</th>
                  <th className="px-6 py-4 font-semibold text-right">{strings.columns.actions}</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.id} className="border-t border-text-dark/10">
                    <td className="px-6 py-3">
                      <img src={car.image} alt="" className="w-24 h-14 object-contain rounded-lg bg-surface" />
                    </td>
                    <td className="px-6 py-3 font-semibold">{car.brand}</td>
                    <td className="px-6 py-3">{car.type}</td>
                    <td className="px-6 py-3 text-primary font-semibold">${car.pricePerDay}</td>
                    <td className="px-6 py-3">
                      <div className="flex justify-end gap-4 text-sm font-semibold">
                        <Link to={editPath(car.id)} className="text-primary hover:underline">
                          {strings.edit}
                        </Link>
                        <button type="button" onClick={() => handleDelete(car.id)} className="text-red-600 hover:underline cursor-pointer">
                          {strings.delete}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
