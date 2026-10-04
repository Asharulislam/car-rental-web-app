import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../component/Button";
import Heading from "../../component/Heading";
import Text from "../../component/Text";
import TextField from "../../component/TextField";
import AppRoutes from "../../constants/AppRoutes";
import AppStrings from "../../constants/AppStrings";
import type { Car } from "../../features/cars/carsData";
import { vehicleTypes } from "../../features/cars/vehicleTypes";
import { createCar, getCar, updateCar, uploadImage, type CarInput } from "../../services/carsService";

const strings = AppStrings.admin.carForm;

// One page for both "Add car" (/admin/cars/new) and "Edit car" (/admin/cars/:id/edit)
export default function AdminCarForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(isEdit);
  const [loadError, setLoadError] = useState("");

  // Editing → load the car first, so the form can be filled in
  useEffect(() => {
    if (!id) return;
    getCar(id)
      .then(setCar)
      .catch(() => setLoadError(strings.notFound))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <Heading level={3}>{isEdit ? strings.editTitle : strings.newTitle}</Heading>

      <div className="mt-8 bg-white rounded-[20px] p-6 md:p-10">
        {isLoading && <Text variant="muted">{AppStrings.admin.cars.loading}</Text>}
        {loadError && <Text className="text-red-600">{loadError}</Text>}
        {!isLoading && !loadError && <CarForm car={car} />}
      </div>
    </>
  );
}

function CarForm({ car }: { car: Car | null }) {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    setIsSaving(true);
    setError("");
    try {
      // Upload new images to S3 first; keep the old ones if no new file was picked
      const imageFile = form.get("image") as File;
      const galleryFiles = (form.getAll("gallery") as File[]).filter((file) => file.size > 0);

      const image = imageFile.size > 0 ? await uploadImage(imageFile) : car?.image ?? "";
      const gallery = galleryFiles.length > 0
        ? await Promise.all(galleryFiles.map(uploadImage))
        : car?.gallery ?? [];

      const data: CarInput = {
        brand: String(form.get("brand")),
        type: String(form.get("type")),
        pricePerDay: Number(form.get("pricePerDay")),
        transmission: String(form.get("transmission")),
        fuel: String(form.get("fuel")),
        doors: Number(form.get("doors")),
        seats: Number(form.get("seats")),
        distance: Number(form.get("distance")),
        airConditioner: form.get("airConditioner") === "on",
        equipment: String(form.get("equipment"))
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        image,
        gallery,
      };

      if (car) await updateCar(String(car.id), data);
      else await createCar(data);

      navigate(AppRoutes.admin);
    } catch {
      setError(strings.saveFailed);
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TextField label={strings.brand} name="brand" defaultValue={car?.brand} required />

      <label className="flex flex-col gap-2">
        <Text variant="small" className="font-semibold">{strings.type}</Text>
        <select
          name="type"
          // Match ignoring capitals, so a saved "SUV" selects the "Suv" option
          defaultValue={vehicleTypes.find((type) => type.id === car?.type.toLowerCase())?.label ?? ""}
          required
          className="w-full bg-input rounded-xl px-4 py-2.75 text-base border border-text-dark/10 cursor-pointer"
        >
          <option value="" disabled>{strings.chooseType}</option>
          {vehicleTypes.map((type) => (
            <option key={type.id} value={type.label}>{type.label}</option>
          ))}
        </select>
      </label>

      <TextField label={strings.pricePerDay} name="pricePerDay" type="number" min={0} defaultValue={car?.pricePerDay} required />
      <TextField label={strings.transmission} name="transmission" defaultValue={car?.transmission ?? "Automat"} required />
      <TextField label={strings.fuel} name="fuel" defaultValue={car?.fuel ?? "PB 95"} required />
      <TextField label={strings.doors} name="doors" type="number" min={1} defaultValue={car?.doors ?? 4} required />
      <TextField label={strings.seats} name="seats" type="number" min={1} defaultValue={car?.seats ?? 5} required />
      <TextField label={strings.distance} name="distance" type="number" min={0} defaultValue={car?.distance} required />

      <TextField
        label={strings.equipment}
        name="equipment"
        hint={strings.equipmentHint}
        defaultValue={car?.equipment.join(", ")}
        className="md:col-span-2"
      />

      <label className="md:col-span-2 flex items-center gap-3 cursor-pointer">
        <input type="checkbox" name="airConditioner" defaultChecked={car?.airConditioner ?? true} className="size-5 accent-primary" />
        <Text className="font-semibold">{strings.airConditioner}</Text>
      </label>

      <div className="md:col-span-2 flex flex-col gap-3">
        {car?.image && <img src={car.image} alt="" className="w-40 h-24 object-contain rounded-xl bg-surface" />}
        <TextField
          label={strings.image}
          name="image"
          type="file"
          accept="image/*"
          required={!car}
          hint={car ? strings.keepImageHint : undefined}
        />
      </div>

      <TextField
        label={strings.gallery}
        name="gallery"
        type="file"
        accept="image/*"
        multiple
        hint={car ? strings.keepImageHint : strings.galleryHint}
        className="md:col-span-2"
      />

      {error && <Text className="md:col-span-2 text-red-600">{error}</Text>}

      <div className="md:col-span-2 flex flex-wrap gap-4">
        <Button type="submit" size="lg" disabled={isSaving}>
          {isSaving ? strings.saving : strings.save}
        </Button>
        <Button type="button" size="lg" variant="secondary" onClick={() => navigate(AppRoutes.admin)}>
          {strings.cancel}
        </Button>
      </div>
    </form>
  );
}
