import { ButtonProps } from '../../interfaces';

export default function Button({
  text,
  url,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return text.length === 0 ? null : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={`text-white py-2 px-4 rounded ${variant === 'primary' ? (disabled === true ? 'bg-[#646cff] ' : 'bg-[#646cff] hover:bg-[#646cffdb] ') : disabled === true ? 'bg-slate-500 ' : 'bg-slate-500 hover:bg-slate-400 '} ${disabled ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer '}`}
    >
      <span>{text}</span>
    </a>
  );
}
