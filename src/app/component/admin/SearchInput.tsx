import AppImages from '../../constants/AppImages';
import AppStrings from '../../constants/AppStrings';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="relative w-full sm:max-w-120">
      <img src={AppImages.search} alt="" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-5" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full h-11 bg-white rounded-xl pl-11 pr-16 text-sm border border-text-dark/10 placeholder:text-gray-text [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary cursor-pointer"
        >
          {AppStrings.admin.common.clear}
        </button>
      )}
    </div>
  );
}
