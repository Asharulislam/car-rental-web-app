import { Link } from 'react-router-dom';
import AppImages from '../constants/AppImages';
import AppLinks from '../constants/AppLinks';
import AppRoutes from '../constants/AppRoutes';
import AppStrings from '../constants/AppStrings';
import Heading from './Heading';
import Text from './Text';

const strings = AppStrings.footer;

const contacts = [
  { icon: AppImages.locationWhite, ...strings.address },
  { icon: AppImages.mailWhite, ...strings.email },
  { icon: AppImages.phoneWhite, ...strings.phone },
];

const socials = [
  { icon: AppImages.facebook, href: AppLinks.facebook, label: 'Facebook' },
  { icon: AppImages.instagram, href: AppLinks.instagram, label: 'Instagram' },
  { icon: AppImages.x, href: AppLinks.x, label: 'X' },
  { icon: AppImages.youtube, href: AppLinks.youtube, label: 'YouTube' },
];

const usefulLinks = [
  { to: AppRoutes.about, label: AppStrings.nav.about },
  { to: AppRoutes.contact, label: AppStrings.nav.contact },
  { to: AppRoutes.gallery, label: strings.gallery },
  { to: AppRoutes.blog, label: strings.blog },
  { to: AppRoutes.faq, label: strings.faq },
];

// Each vehicle type opens the Vehicles page filtered by that type, e.g. /vehicles?type=suv
const vehicleLinks = strings.vehicleTypes.map((type) => ({
  to: `${AppRoutes.vehicles}?type=${type.toLowerCase()}`,
  label: type,
}));

function LinkColumn({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <Heading level={5}>{title}</Heading>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 pt-15 pb-8">
      {/* Top row: logo + contact details */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <Link to={AppRoutes.home} className="flex items-center gap-3">
          <img src={AppImages.logo} alt={AppStrings.appName} className="size-12" />
          <span className="font-inter font-bold text-base">{AppStrings.appName}</span>
        </Link>

        {contacts.map((contact) => (
          <div key={contact.label} className="flex items-center gap-3">
            <div className="size-11 shrink-0 rounded-full bg-secondary flex items-center justify-center">
              <img src={contact.icon} alt="" className="size-6" />
            </div>
            <div>
              <Text>{contact.label}</Text>
              <Text className="font-semibold">{contact.value}</Text>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row: 1 column on phone, 2 on tablet, 4 on desktop */}
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] gap-10">
        <div>
          <Text className="max-w-75 text-xl font-semibold leading-snug line-clamp-4">
            {strings.about}
          </Text>
          <div className="mt-6 flex gap-6">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                <img src={social.icon} alt="" className="size-6" />
              </a>
            ))}
          </div>
        </div>

        <LinkColumn title={strings.usefulLinks} links={usefulLinks} />
        <LinkColumn title={strings.vehicles} links={vehicleLinks} />

        <div>
          <Heading level={5}>{strings.downloadApp}</Heading>
          <div className="mt-4 flex flex-col gap-6">
            <a href={AppLinks.appStore} target="_blank" rel="noreferrer">
              <img src={AppImages.appStore} alt={AppStrings.home.downloadApp.appStore} className="h-13 w-auto" />
            </a>
            <a href={AppLinks.googlePlay} target="_blank" rel="noreferrer">
              <img src={AppImages.googlePlay} alt={AppStrings.home.downloadApp.googlePlay} className="h-13 w-auto" />
            </a>
          </div>
        </div>
      </div>

      <Text variant="small" className="mt-20 text-center text-gray-text">
        © Copyright {AppStrings.appName} {new Date().getFullYear()}. {strings.copyright}
      </Text>
    </footer>
  );
}
