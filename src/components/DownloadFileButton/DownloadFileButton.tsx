import { DownloadFileButtonProps } from '../../interfaces';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { downloadPDF } from '../../utils';

export default function DownloadFileButton({
  text,
  fileName,
  filePath,
  variant = 'primary',
  disabled = false,
}: DownloadFileButtonProps) {
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

  const disabledClasses = disabled
    ? 'cursor-not-allowed opacity-70'
    : 'cursor-pointer';

  const focusClasses =
    'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800';

  return text.length === 0 ? null : (
    <button
      onClick={() => downloadPDF(fileName, filePath)}
      className={`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${focusClasses} ${variantClasses(variant)} ${disabledClasses}`}
      disabled={disabled}
    >
      <ArrowDownTrayIcon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
}
