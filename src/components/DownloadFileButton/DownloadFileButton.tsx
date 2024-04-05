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
  const buttonVariantClasses =
    variant === 'primary'
      ? disabled === true
        ? 'bg-[#646cff] '
        : 'bg-[#646cff] hover:bg-[#646cffdb] '
      : disabled === true
        ? 'bg-slate-500 '
        : 'bg-slate-500 hover:bg-slate-400 ';

  return text.length === 0 ? null : (
    <button
      onClick={() => downloadPDF(fileName, filePath)}
      className={`text-white py-1.5 px-4 rounded-lg text-md flex flex-row gap-2 items-center ${buttonVariantClasses}`}
      disabled={disabled}
    >
      <ArrowDownTrayIcon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
}
