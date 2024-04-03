import { ButtonProps } from '../../interfaces';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/16/solid';

export default function Button({
  text,
  url,
  variant = 'primary',
  disabled = false,
  icon,
}: ButtonProps) {
  const buttonVariantClasses =
    variant === 'primary'
      ? disabled === true
        ? 'bg-[#646cff] '
        : 'bg-[#646cff] hover:bg-[#646cffdb] '
      : disabled === true
        ? 'bg-slate-500 '
        : 'bg-slate-500 hover:bg-slate-400 ';

  const buttonDisabledClasses = disabled
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer';

  const iconClasses = 'w-4 h-4';
  return text.length === 0 ? null : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${buttonVariantClasses} ${buttonDisabledClasses}`}
    >
      {icon === 'codeIcon' ? <CodeBracketIcon className={iconClasses} /> : null}
      {icon === 'webIcon' ? <GlobeAltIcon className={iconClasses} /> : null}
      <span>{text}</span>
    </a>
  );
}
