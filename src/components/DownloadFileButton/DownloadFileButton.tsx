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
          ? 'bg-custom-blue'
          : 'bg-custom-blue hover:bg-opacity-90';
      case 'pink':
        return disabled === true
          ? 'bg-custom-pink'
          : 'bg-custom-pink hover:bg-opacity-90';
      case 'secondary':
        return disabled === true
          ? 'bg-slate-500'
          : 'bg-slate-500 hover:bg-opacity-90';
    }
  };

  const disabledClasses = disabled
    ? 'cursor-not-allowed opacity-70'
    : 'cursor-pointer';

  return text.length === 0 ? null : (
    <button
      onClick={() => downloadPDF(fileName, filePath)}
      className={`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${variantClasses(variant)} ${disabledClasses}`}
      disabled={disabled}
    >
      <ArrowDownTrayIcon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
}
