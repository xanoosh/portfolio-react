export interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return text.length === 0 ? null : (
    <span
      className={`bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-slate-500 dark:text-slate-100 nowrap`}
    >
      {text}
    </span>
  );
}
