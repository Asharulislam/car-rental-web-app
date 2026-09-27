import Heading from './Heading';
import Text from './Text';

type FeatureItemProps = {
  icon: string;
  title: string;
  text: string;
};

export default function FeatureItem({ icon, title, text }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={icon} alt="" className="size-16" />
      <Heading level={4} className="mt-5">
        {title}
      </Heading>
      <Text className="mt-7 max-w-[357px] font-inter leading-6">{text}</Text>
    </div>
  );
}
