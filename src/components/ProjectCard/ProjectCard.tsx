import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import { ProjectCardProps } from '../../interfaces';
import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  description,
  badges,
  buttons,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-4 backdrop-blur-sm max-w-sm p-6 bg-white/50 border border-slate-200 rounded-lg shadow dark:bg-slate-800/50 dark:border-slate-700"
    >
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
      <div className="flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4">
        {buttons.map(({ text, url, icon }, i: number) => (
          <Button key={i} text={text} url={url} icon={icon} />
        ))}
      </div>
    </motion.div>
  );
}
