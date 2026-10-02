import AppImages from '../../constants/AppImages';

export type BlogPost = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
};

// Dummy posts until they come from the API
export const blogPosts: BlogPost[] = [
  { id: 1, title: 'How To Choose The Right Car', category: 'News', date: '12 April 2024', image: AppImages.car },
  { id: 2, title: 'Which plan is right for me?', category: 'News', date: '12 April 2024', image: AppImages.carPlaceholder },
  { id: 3, title: 'Enjoy Speed, Choice & Total Control', category: 'News', date: '12 April 2024', image: AppImages.car },
];
