import AppImages from '../../constants/AppImages';

export type Car = {
  id: number;
  brand: string;
  type: string;
  pricePerDay: number;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
  image: string;
};

// Sample cars from the Figma design — later these will come from the API
export const cars: Car[] = [
  { id: 1, brand: 'Mercedes', type: 'Sedan', pricePerDay: 25, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, image: AppImages.carPlaceholder },
  { id: 2, brand: 'Mercedes', type: 'Sport', pricePerDay: 50, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, image: AppImages.carPlaceholder },
  { id: 3, brand: 'Mercedes', type: 'Sedan', pricePerDay: 45, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, image: AppImages.carPlaceholder },
  { id: 4, brand: 'Porsche', type: 'SUV', pricePerDay: 40, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, image: AppImages.carPlaceholder },
  { id: 5, brand: 'Toyota', type: 'Sedan', pricePerDay: 35, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, image: AppImages.carPlaceholder },
  { id: 6, brand: 'Porsche', type: 'SUV', pricePerDay: 50, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, image: AppImages.carPlaceholder },
];
