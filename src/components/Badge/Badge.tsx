import { BadgeProps, RemoveButtonProps } from '../../interfaces';
import { XMarkIcon } from '@heroicons/react/16/solid';

export default function Badge({
  text,
  variant = 'main',
  size = 'sm',
  handleRemove,
  handleClick,
  noFocus = false,
}: BadgeProps) {
  const colorClasses = () => {
    switch (variant) {
      case 'main':
        return 'bg-slate-900 text-slate-400';
      case 'pink':
        return 'bg-pink-600 text-white';
    }
  };
  const sizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xs font-medium px-2.5 py-1';
      case 'lg':
        return 'text-sm font-lg px-4 py-1.5';
    }
  };
  const focusClasses =
    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-slate-800 ring-pink-600';

  return text.length === 0 ? null : (
    <div
      role="badge"
      tabIndex={noFocus ? -1 : 0}
      className={`transition-bg duration-300 ease-in-out ${colorClasses()} ${sizeClasses()} ${focusClasses} rounded-full flex flex-row gap-2 items-center ${
        handleClick ? 'cursor-pointer' : ''
      }`}
      onClick={handleClick ? handleClick : () => null}
      onKeyDown={(e) => {
        if (e.code === 'Enter') handleClick ? handleClick() : (() => null)();
      }}
    >
      <span className="">{text}</span>
      {handleRemove ? <RemoveButton onClick={handleRemove} /> : null}
    </div>
  );
}

function RemoveButton({ onClick }: RemoveButtonProps) {
  return onClick ? (
    <button
      className="transition-bg duration-300 ease-in-out h-4 w-4 appearance-none items-center justify-center rounded-full focus:outline-none hover:opacity-50 focus:ring-2 focus:ring-white"
      aria-label="close"
      onClick={onClick}
    >
      <XMarkIcon />
    </button>
  ) : null;
}
