import { ButtonProps } from '../../interfaces';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/16/solid';

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
          ? 'bg-custom-blue ring-custom-blue'
          : 'bg-custom-blue hover:bg-opacity-90 ring-custom-blue';
      case 'pink':
        return disabled === true
          ? 'bg-custom-pink ring-custom-pink'
          : 'bg-custom-pink hover:bg-opacity-90 ring-custom-pink';
      case 'secondary':
        return disabled === true
          ? 'bg-slate-500 ring-slate-500'
          : 'bg-slate-500 hover:bg-opacity-90 ring-slate-500';
    }
  };

  const buttonDisabledClasses = disabled
    ? 'cursor-not-allowed opacity-70'
    : 'cursor-pointer';

  const focusClasses =
    'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800';

  const iconClasses = 'w-4 h-4';
  return text.length === 0 ? null : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${focusClasses} ${variantClasses(variant)} ${buttonDisabledClasses}`}
    >
      {icon === 'codeIcon' ? <CodeBracketIcon className={iconClasses} /> : null}
      {icon === 'webIcon' ? <GlobeAltIcon className={iconClasses} /> : null}
      <span>{text}</span>
    </a>
  );
}
