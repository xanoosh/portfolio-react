import { ButtonProps } from '../../interfaces';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Button({
  text,
  url,
  variant = 'primary',
  disabled = false,
  icon,
}: ButtonProps) {
  const variantClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return disabled === true
          ? 'bg-sky-700 ring-sky-700 text-white'
          : 'bg-sky-700 ring-sky-700 text-white hover:bg-pink-600 hover:ring-pink-600';
      case 'secondary':
        return disabled === true
          ? 'bg-slate-900 ring-pink-600 text-pink-600'
          : 'bg-slate-900 ring-pink-600 text-pink-600 hover:text-white hover:bg-pink-600 hover:ring-pink-600';
    }
  };

  const buttonDisabledClasses = disabled
    ? 'cursor-not-allowed opacity-70'
    : 'cursor-pointer';

  const focusClasses =
    'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800';

  const iconClasses = 'w-4.5 h-4.5';
  return text.length === 0 ? null : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={`py-1.5 px-4 rounded-lg text-md flex flex-row gap-1.5 items-center justify-center transition-bg duration-300 ease-in-out ${focusClasses} ${variantClasses(
        variant
      )} ${buttonDisabledClasses}`}
    >
      {icon === 'codeIcon' ? <CodeBracketIcon className={iconClasses} /> : null}
      {icon === 'webIcon' ? <GlobeAltIcon className={iconClasses} /> : null}
      <span>{text}</span>
    </a>
  );
}
