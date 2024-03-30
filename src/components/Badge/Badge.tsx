import { BadgeProps, RemoveButtonProps } from '../../interfaces';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Badge({
  text,
  variant = 'main',
  size = 'sm',
  handleRemove,
}: BadgeProps) {
  const colorClasses =
    variant === 'main'
      ? 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  const sizeClasses =
    size === 'sm'
      ? 'text-xs font-medium px-2.5 py-1'
      : 'text-sm font-lg px-4 py-1.5';
  return text.length === 0 ? null : (
    <div
      className={`${colorClasses} ${sizeClasses} rounded-full flex flex-row gap-2 items-center`}
    >
      <span className="">{text}</span>
      {handleRemove ? <RemoveButton onClick={handleRemove} /> : null}
    </div>
  );
}

function RemoveButton({ onClick }: RemoveButtonProps) {
  return onClick ? (
    <button
      className="h-4 w-4 appearance-none items-center justify-center rounded-full focus:outline-none hover:opacity-50"
      aria-label="Close"
      onClick={onClick}
    >
      <XMarkIcon />
    </button>
  ) : null;
}
