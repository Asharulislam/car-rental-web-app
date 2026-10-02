type FilterPillProps = {
  label: string;
  icon?: string;
  isActive: boolean;
  onClick: () => void;
};

export default function FilterPill({ label, icon, isActive, onClick }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`h-13 px-8 rounded-full flex items-center gap-2 cursor-pointer ${
        isActive ? 'bg-primary text-text-light' : 'bg-surface text-text-dark'
      }`}
    >
      {/* brightness-0 invert turns the black icon white on the purple pill */}
      {icon && <img src={icon} alt="" className={`w-7 h-auto ${isActive ? 'brightness-0 invert' : ''}`} />}
      {label}
    </button>
  );
}
