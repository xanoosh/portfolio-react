import { BadgeProps, RemoveButtonProps } from '../../interfaces';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

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

  const focusClasses = () => {
    if (noFocus) return '';
    switch (variant) {
      case 'main':
        return 'focus:outline-none focus:ring-1 ring-offset-2 ring-offset-slate-800 ring-slate-900';
      case 'pink':
        return 'focus:outline-none focus:ring-1 ring-offset-2 ring-offset-slate-800 ring-custom-pink';
    }
  };

  return text.length === 0 ? null : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`${colorClasses()} ${sizeClasses()} ${focusClasses()} rounded-full flex flex-row gap-2 items-center ${
        handleClick ? 'cursor-pointer' : ''
      }`}
      onClick={handleClick ? handleClick : () => null}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.code === 'Enter') handleClick ? handleClick() : (() => null)();
      }}
    >
      <span className="">{text}</span>
      {handleRemove ? <RemoveButton onClick={handleRemove} /> : null}
    </motion.div>
  );
}

function RemoveButton({ onClick }: RemoveButtonProps) {
  return onClick ? (
    <button
      className="h-4 w-4 appearance-none items-center justify-center rounded-full focus:outline-none hover:opacity-50 focus:ring-1 focus:ring-white"
      aria-label="Close"
      onClick={onClick}
    >
      <XMarkIcon />
    </button>
  ) : null;
}
