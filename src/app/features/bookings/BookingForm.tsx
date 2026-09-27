import type { FormEvent } from 'react';
import AppStrings from '../../constants/AppStrings';
import Button from '../../component/Button';
import DateField from '../../component/DateField';
import Heading from '../../component/Heading';
import SelectField from '../../component/SelectField';

// Sample options until these come from the API
const carTypes = ['Sedan', 'SUV', 'Hatchback', 'Sports'];
const places = ['Airport', 'City Center', 'Train Station'];

type BookingFormProps = {
  className?: string;
};

export default function BookingForm({ className = '' }: BookingFormProps) {
  const strings = AppStrings.bookingForm;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-104 bg-white rounded-[20px] p-6 sm:p-10 flex flex-col items-center gap-10 text-text-dark ${className}`}
    >
      <Heading level={3}>{strings.title}</Heading>

      <div className="w-full flex flex-col gap-5">
        <SelectField name="carType" placeholder={strings.carType} options={carTypes} required />
        <SelectField name="placeOfRental" placeholder={strings.placeOfRental} options={places} required />
        <SelectField name="placeOfReturn" placeholder={strings.placeOfReturn} options={places} required />
        <DateField name="rentalDate" placeholder={strings.rentalDate} required />
        <DateField name="returnDate" placeholder={strings.returnDate} required />
      </div>

      <Button type="submit" variant="secondary" fullWidth>
        {strings.bookNow}
      </Button>
    </form>
  );
}
