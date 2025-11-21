import { ErrorProps } from '../../interfaces';

export default function Error({ text }: ErrorProps) {
  return text?.length > 0 ? (
    <div
      aria-label="error-container"
      className="flex justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50"
    >
      <p aria-label="error-text" className="text-rose-600 font-semibold">
        Error: {text}
      </p>
    </div>
  ) : null;
}
