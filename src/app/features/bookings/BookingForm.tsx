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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('Booking:', data); // TODO: send to the API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-104 bg-white rounded-[20px] p-10 flex flex-col items-center gap-10 text-text-dark ${className}`}
    >
      <Heading level={2}>{strings.title}</Heading>

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
