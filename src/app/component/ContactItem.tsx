import Text from './Text';

type ContactItemProps = {
  icon: string;
  label: string;
  value: string;
};

// Orange circle icon + label + bold value (used in the Footer and on the Contact page)
export default function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-11 shrink-0 rounded-full bg-secondary flex items-center justify-center">
        <img src={icon} alt="" className="size-6" />
      </div>
      <div>
        <Text>{label}</Text>
        <Text className="font-semibold">{value}</Text>
      </div>
    </div>
  );
}
