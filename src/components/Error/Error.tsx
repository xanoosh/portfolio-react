import { ErrorProps } from '../../interfaces';

export default function Error({ text }: ErrorProps) {
  return (
    <div role="alert" className="text-rose-600">
      Error: {text}
    </div>
  );
}
