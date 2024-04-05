import { BadgeProps, RemoveButtonProps } from '../../interfaces';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

export default function Badge({
  text,
  variant = 'main',
  size = 'sm',
  handleRemove,
}: BadgeProps) {
  const colorClasses =
    variant === 'main'
      ? 'bg-slate-400 text-slate-700'
      : 'bg-custom-pink text-white';
  const sizeClasses =
    size === 'sm'
      ? 'text-xs font-medium px-2.5 py-1'
      : 'text-sm font-lg px-4 py-1.5';
  return text.length === 0 ? null : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`${colorClasses} ${sizeClasses} rounded-full flex flex-row gap-2 items-center`}
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
