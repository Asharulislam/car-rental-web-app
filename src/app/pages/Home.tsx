import AppImages from '../constants/AppImages';
import AppStrings from '../constants/AppStrings';
import Button from '../component/Button';
import Heading from '../component/Heading';
import Text from '../component/Text';
import BookingForm from '../features/bookings/BookingForm';

export default function Home() {
  return (
   
      <div className="relative">
        <img src={AppImages.banner} alt="Blue sports car" className="w-full" />

        <div className="absolute inset-y-0 left-40 flex flex-col justify-center max-w-600px text-text-light">
          <Heading className='w-2xl'>{AppStrings.home.heroTitle}</Heading>
          <Text className="mt-6 max-w-116">{AppStrings.home.heroText}</Text>
          <Button variant="secondary" className="mt-8">
            {AppStrings.home.viewAllCars}
          </Button>
        </div>

        <BookingForm className="absolute right-40 top-1/2 -translate-y-1/2" />
      </div>
  );
}
