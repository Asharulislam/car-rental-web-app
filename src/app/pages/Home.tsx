import AppImages from '../constants/AppImages';
import AppStrings from '../constants/AppStrings';
import Button from '../component/Button';
import Heading from '../component/Heading';
import Text from '../component/Text';
import BookingForm from '../features/bookings/BookingForm';

export default function Home() {
  return (
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
  );
}
