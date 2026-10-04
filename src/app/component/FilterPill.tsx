type FilterPillProps = {
  label: string;
  icon?: string;
  isActive: boolean;
  onClick: () => void;
  size?: 'md' | 'sm'; // sm = compact, for the admin panel
};

const sizes = {
  md: 'h-13 px-8',
  sm: 'h-9 px-4 text-sm border border-text-dark/10',
};

export default function FilterPill({ label, icon, isActive, onClick, size = 'md' }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`${sizes[size]} rounded-full flex items-center gap-2 cursor-pointer ${
        isActive ? 'bg-primary text-text-light' : size === 'sm' ? 'bg-white text-text-dark' : 'bg-surface text-text-dark'
      }`}
    >
      {/* brightness-0 invert turns the black icon white on the purple pill */}
      {icon && <img src={icon} alt="" className={`w-7 h-auto ${isActive ? 'brightness-0 invert' : ''}`} />}
      {label}
    </button>
  );
}
