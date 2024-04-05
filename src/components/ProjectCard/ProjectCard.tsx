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
      className="flex flex-col gap-4 backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50"
    >
      {title ? (
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className="font-normal text-slate-300">{description}</p>
      ) : null}
      {badges ? (
        <div className="flex flex-row gap-2 flex-wrap">
          {badges.map((badge, i: number) => (
            <Badge key={i} text={badge} />
          ))}
        </div>
      ) : null}
      {buttons ? (
        <div className="flex flex-row sm:flex-nowrap flex-wrap mt-auto gap-4">
          {buttons.map(({ text, url, icon }, i: number) => (
            <Button key={i} text={text} url={url} icon={icon} />
          ))}
        </div>
      ) : null}
    </motion.div>
  );
}
