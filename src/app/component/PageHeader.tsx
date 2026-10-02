import { Link } from 'react-router-dom';
import AppRoutes from '../constants/AppRoutes';
import AppStrings from '../constants/AppStrings';
import Heading from './Heading';

type PageHeaderProps = {
  title: string;
};

// Page title + breadcrumb ("Home / About Us"), reusable on About, Contact, ...
export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 pt-10 xl:pt-15 text-center">
      <Heading level={2}>{title}</Heading>
      <p className="mt-3 text-sm">
        <Link to={AppRoutes.home} className="text-text-dark/40 hover:text-primary">
          {AppStrings.nav.home}
        </Link>
        <span className="text-text-dark/40"> / </span>
        <span>{title}</span>
      </p>
    </section>
  );
}
