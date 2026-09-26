import AppImages from '../constants/AppImages';
import AppStrings from '../constants/AppStrings';
import Button from '../component/Button';

export default function Home() {
  return (
   
      <div className="relative">
        <img src={AppImages.banner} alt="Blue sports car" className="w-full" />

        <div className="absolute inset-y-0 left-18 flex flex-col justify-center max-w-686px text-text-light">
          <h1 className="text-6xl font-bold">{AppStrings.home.heroTitle}</h1>
          <p className="mt-6 text-base max-w-464px">{AppStrings.home.heroText}</p>
          <Button variant="secondary" className="mt-8">
            {AppStrings.home.viewAllCars}
          </Button>
        </div>
      </div>
  );
}
