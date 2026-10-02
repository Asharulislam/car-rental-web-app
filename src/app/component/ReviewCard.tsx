import Text from './Text';

type ReviewCardProps = {
  text: string;
  company: string;
  name: string;
  avatar?: string;
};

export default function ReviewCard({ text, company, name, avatar }: ReviewCardProps) {
  // Until real photos come from the API, show the person's initials
  const initials = name.split(' ').map((part) => part[0]).join('');

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden bg-surface text-center">
      {/* Top: quote */}
      <div className="flex-1 px-8 pt-8 pb-14">
        <p className="text-6xl leading-none font-bold text-primary text-left">“</p>
        <Text className="mt-2 font-medium">{text}</Text>
      </div>

      {/* Bottom: avatar overlaps the purple part */}
      <div className="relative bg-primary pt-12 pb-6 text-text-light">
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 size-18 rounded-full border-4 border-white bg-secondary overflow-hidden flex items-center justify-center font-bold text-xl">
          {avatar ? <img src={avatar} alt="" className="w-full h-full object-cover" /> : initials}
        </div>
        <Text variant="small" className="text-text-light/70">{company}</Text>
        <Text className="mt-1 font-semibold">{name}</Text>
      </div>
    </article>
  );
}
