import ContactItem from "../component/ContactItem";
import Heading from "../component/Heading";
import PageHeader from "../component/PageHeader";
import AppImages from "../constants/AppImages";
import AppStrings from "../constants/AppStrings";
import BlogCard from "../features/blog/BlogCard";
import { blogPosts } from "../features/blog/blogData";
import BookingForm from "../features/bookings/BookingForm";

const strings = AppStrings.contactPage;

const contacts = [
  { icon: AppImages.locationWhite, ...AppStrings.footer.address },
  { icon: AppImages.mailWhite, ...AppStrings.footer.email },
  { icon: AppImages.phoneWhite, ...AppStrings.footer.phone },
  { icon: AppImages.clockWhite, ...strings.openingHours },
];

export default function Contact() {
  return (
    <>
      <PageHeader title={strings.title} />

      {/* This page is narrower than the others (about 980px), like the design */}
      <div className="max-w-245 mx-auto px-4 md:px-8 xl:px-0">
        {/* Purple booking form + photo: stacked on phone, side by side from tablet */}
        <section className="pt-15 grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-5">
          <BookingForm variant="primary" className="justify-self-center md:justify-self-stretch" />
          <img src={AppImages.car} alt="" className="w-full h-64 md:h-full object-cover rounded-2xl" />
        </section>

        {/* Contact details: 1 column on phone, 2 on tablet, 4 on desktop */}
        <section className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <ContactItem key={contact.label} {...contact} />
          ))}
        </section>

        {/* Blog posts */}
        <section className="py-15">
          <Heading level={2} className="text-center">{strings.blogTitle}</Heading>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
