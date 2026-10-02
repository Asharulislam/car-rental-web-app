import AppImages from '../../constants/AppImages';

export type Car = {
  id: number;
  brand: string;
  type: string;
  pricePerDay: number;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
  doors: number;
  seats: number;
  distance: number;
  equipment: string[];
  image: string;
  gallery: string[];
};

// Dummy data until cars come from the API
const equipment = ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner'];
const gallery = [AppImages.carPlaceholder, AppImages.car, AppImages.carPlaceholder];

// Sample cars from the Figma design — later these will come from the API
export const cars: Car[] = [
  { id: 1, brand: 'Mercedes', type: 'Sedan', pricePerDay: 25, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, doors: 4, seats: 5, distance: 500, equipment, image: AppImages.carPlaceholder, gallery },
  { id: 2, brand: 'Mercedes', type: 'Sport', pricePerDay: 50, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, doors: 2, seats: 2, distance: 300, equipment, image: AppImages.carPlaceholder, gallery },
  { id: 3, brand: 'Mercedes', type: 'Sedan', pricePerDay: 45, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, doors: 4, seats: 5, distance: 600, equipment, image: AppImages.carPlaceholder, gallery },
  { id: 4, brand: 'Porsche', type: 'SUV', pricePerDay: 40, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, doors: 4, seats: 5, distance: 700, equipment, image: AppImages.carPlaceholder, gallery },
  { id: 5, brand: 'Toyota', type: 'Sedan', pricePerDay: 35, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, doors: 4, seats: 5, distance: 500, equipment, image: AppImages.carPlaceholder, gallery },
  { id: 6, brand: 'Porsche', type: 'SUV', pricePerDay: 50, transmission: 'Automat', fuel: 'PB 95', airConditioner: true, doors: 4, seats: 5, distance: 800, equipment, image: AppImages.carPlaceholder, gallery },
];
