import AppImages from '../constants/AppImages';
import Text from './Text';

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border border-text-dark/15 rounded-2xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold cursor-pointer"
      >
        {question}
        {/* Arrow points up when open, down when closed */}
        <img
          src={AppImages.chevronDown}
          alt=""
          className={`size-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <Text variant="small" className="px-6 pb-6 text-text-dark/60 leading-6">
          {answer}
        </Text>
      )}
    </div>
  );
}
