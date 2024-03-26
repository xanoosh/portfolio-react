import Badge from '../Badge/Badge';
import { ProjectCardProps } from '../../interfaces';

export default function ProjectCard({
  title,
  description,
  badges,
  buttons,
}: ProjectCardProps) {
  return (
    <div className="w-[20rem] flex flex-col gap-4 backdrop-blur-sm max-w-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700">
      <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="font-normal text-slate-700 dark:text-slate-400">
        {description}
      </p>
      <div className="flex flex-row gap-2 flex-wrap">
        {badges.map((badge, i: number) => (
          <Badge key={i} text={badge} />
        ))}
      </div>
      <div className="flex flex-row mt-auto gap-4">
        {buttons.map((button, i: number) => (
          <a
            key={i}
            target="_blank"
            href={button.url}
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {button.name}
          </a>
        ))}
      </div>
    </div>
  );
}
