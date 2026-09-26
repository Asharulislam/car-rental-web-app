import AppStrings from '../constants/AppStrings';

export default function Home() {
  return <h1 className="text-3xl font-bold p-10">{AppStrings.home.title}</h1>;
}