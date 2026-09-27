import Text from './Text';

type StatCardProps = {
  icon: string;
  value: string;
  label: string;
};

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-xl text-left">
      <div className="size-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
        <img src={icon} alt="" className="size-7" />
      </div>
      <div>
        <Text variant="large" className="text-text-dark">{value}</Text>
        <Text variant="small" className="mt-0.5 text-text-dark/60">{label}</Text>
      </div>
    </div>
  );
}
