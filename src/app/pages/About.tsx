import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import FaqItem from "../component/FaqItem";
import Heading from "../component/Heading";
import PageHeader from "../component/PageHeader";
import ReviewCard from "../component/ReviewCard";
import Text from "../component/Text";
import AppImages from "../constants/AppImages";
import AppLinks from "../constants/AppLinks";
import AppRoutes from "../constants/AppRoutes";
import AppStrings from "../constants/AppStrings";

const strings = AppStrings.about;

export default function About() {
  const navigate = useNavigate();
  // Index of the open FAQ question (null = all closed). The first one starts open, like the design.
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHeader title={strings.title} />

      {/* Intro: title + 4 short points (2×2) */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Heading level={2} className="max-w-90">{strings.intro.title}</Heading>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {strings.intro.items.map((item) => (
            <div key={item.title}>
              <Heading level={5}>{item.title}</Heading>
              <Text variant="small" className="mt-3 text-text-dark/60 leading-6">{item.text}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Video preview with a play button (dummy image until the real video exists) */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={AppImages.car} alt="" className="w-full h-64 md:h-110 xl:h-150 object-cover" />
          <button
            type="button"
            aria-label={strings.playVideo}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-16 md:size-20 rounded-full bg-primary flex items-center justify-center cursor-pointer"
          >
            {/* Play triangle */}
            <span className="ml-1 border-y-10 border-y-transparent border-l-16 border-l-white" />
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {strings.stats.map((stat) => (
          <div key={stat.label} className="sm:justify-self-center">
            <p className="text-5xl xl:text-6xl font-bold text-primary">{stat.value}</p>
            <Text className="mt-2 font-semibold">{stat.label}</Text>
          </div>
        ))}
      </section>

      {/* Memories: text + 4 ticks on the left, photo on the right */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Heading level={2}>{strings.memories.title}</Heading>
          <Text variant="small" className="mt-6 text-text-dark/60 leading-6">{strings.memories.text}</Text>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strings.memories.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <img src={AppImages.check} alt="" className="size-5 shrink-0 mt-0.5" />
                <Text variant="small" className="text-text-dark/60 leading-6">{item}</Text>
              </li>
            ))}
          </ul>
        </div>
        <img src={AppImages.car} alt="" className="w-full aspect-square object-cover rounded-2xl" />
      </section>

      {/* Download our app: phone sticks out above the purple banner (phone hidden on small screens) */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 pt-15 lg:pt-35 pb-15">
        <div className="relative bg-primary rounded-[20px]">
          <img
            src={AppImages.mediumBanner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-left rounded-[20px]"
          />
          <img
            src={AppImages.mobileApps}
            alt=""
            className="hidden lg:block absolute left-15 bottom-8 w-80 xl:w-96 pointer-events-none"
          />

          <div className="relative px-6 py-10 md:px-10 lg:ml-[48%] lg:pr-15 lg:py-16 text-text-light">
            <Text variant="small" className="uppercase tracking-wide text-text-light/80">
              {strings.downloadApp.label}
            </Text>
            <Heading level={2} className="mt-3">{strings.downloadApp.title}</Heading>
            <Text variant="small" className="mt-6 leading-6 text-text-light/90">{strings.downloadApp.text}</Text>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={AppLinks.appStore} target="_blank" rel="noreferrer">
                <img src={AppImages.appStore} alt={AppStrings.home.downloadApp.appStore} className="h-12 w-auto" />
              </a>
              <a href={AppLinks.googlePlay} target="_blank" rel="noreferrer">
                <img src={AppImages.googlePlay} alt={AppStrings.home.downloadApp.googlePlay} className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews: 1 column on phone, 3 from tablet */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <Heading level={2} className="text-center">{strings.reviews.title}</Heading>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {strings.reviews.items.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>

      {/* FAQ: only one answer open at a time */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <Heading level={2} className="text-center">{strings.faq.title}</Heading>
        <div className="mt-12 flex flex-col gap-4">
          {strings.faq.items.map((item, index) => (
            <FaqItem
              key={item.question}
              {...item}
              isOpen={openFaq === index}
              onToggle={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Looking for a car? */}
      <section className="max-w-360 mx-auto px-4 md:px-8 xl:px-18 py-15">
        <div className="relative bg-primary rounded-[20px] overflow-hidden">
          <img
            src={AppImages.mediumBanner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-left -scale-y-100"
          />
          <img
            src={AppImages.car}
            alt=""
            className="hidden md:block absolute right-0 bottom-0 w-[48%] pointer-events-none"
          />

          <div className="relative px-6 py-10 md:px-10 xl:px-18 xl:py-16 md:max-w-[55%] text-text-light">
            <Heading level={2}>{strings.lookingForCar.title}</Heading>
            <p className="mt-3 text-2xl md:text-3xl font-bold">{AppStrings.footer.phone.value}</p>
            <Text variant="small" className="mt-6 text-text-light/90">{strings.lookingForCar.text}</Text>
            <Button variant="secondary" className="mt-8" onClick={() => navigate(AppRoutes.vehicles)}>
              {strings.lookingForCar.bookNow}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
