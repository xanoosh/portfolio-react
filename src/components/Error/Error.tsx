import { BadgeProps } from '../../interfaces';

export default function Error({ text }: BadgeProps) {
  return <p>Error: {text}</p>;
}
