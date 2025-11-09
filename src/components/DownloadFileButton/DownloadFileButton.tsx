import { DownloadFileButtonProps } from '../../interfaces';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { downloadPDF } from '../../utils';

export default function DownloadFileButton({
  text,
  fileName,
  filePath,
  disabled = false,
}: DownloadFileButtonProps) {
  const backgroundClasses =
    disabled === true
      ? 'bg-sky-700 ring-sky-700'
      : 'bg-sky-700 ring-sky-700 hover:bg-pink-600 hover:ring-pink-600';

  const disabledClasses = disabled
    ? 'cursor-not-allowed opacity-70'
    : 'cursor-pointer';

  const focusClasses =
    'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800';

  return text.length === 0 ? null : (
    <button
      onClick={() => downloadPDF(fileName, filePath)}
      className={`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center transition-bg duration-300 ease-in-out ${focusClasses} ${backgroundClasses} ${disabledClasses}`}
      disabled={disabled}
    >
      <ArrowDownTrayIcon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
}
