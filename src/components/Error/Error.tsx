import { ErrorProps } from '../../interfaces';

export default function Error({ text }: ErrorProps) {
  return text?.length > 0 ? (
    <div role="alert" className="text-rose-600 font-semibold">
      Error: {text}
    </div>
  ) : null;
}
