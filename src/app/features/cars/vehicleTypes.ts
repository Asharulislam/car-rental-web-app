import AppImages from '../../constants/AppImages';
import AppStrings from '../../constants/AppStrings';

// `id` is what goes in the URL: /vehicles?type=sedan
export const vehicleTypes = [
  { id: 'sedan', label: AppStrings.vehicles.types.sedan, icon: AppImages.sedan },
  { id: 'cabriolet', label: AppStrings.vehicles.types.cabriolet, icon: AppImages.cabriolet },
  { id: 'pickup', label: AppStrings.vehicles.types.pickup, icon: AppImages.pickup },
  { id: 'suv', label: AppStrings.vehicles.types.suv, icon: AppImages.suv },
  { id: 'minivan', label: AppStrings.vehicles.types.minivan, icon: AppImages.minivan },
];
