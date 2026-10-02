import Text from './Text';

type SpecCardProps = {
  icon: string;
  label: string;
  value: string | number;
};

export default function SpecCard({ icon, label, value }: SpecCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-5">
      <img src={icon} alt="" className="size-6" />
      <Text variant="small" className="mt-4 font-semibold text-text-dark">{label}</Text>
      <Text variant="small" className="mt-1 text-text-dark/60">{value}</Text>
    </div>
  );
}
