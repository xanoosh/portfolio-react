import { motion } from 'framer-motion';
import ProjectFilterSelect from './ProjectFilterSelect/ProjectFilterSelect';
import ProjectFilterTooltip from './ProjectFilterTooltip/ProjectFilterTooltip';
import ProjectFilterBadges from './ProjectFilterBadges/ProjectFilterBadges';

export default function ProjectFilter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      aria-label="project-filter-component"
      className="w-full flex flex-wrap gap-4 md:gap-8 p-6 rounded-lg shadow bg-slate-800"
    >
      <div className="flex gap-2">
        <ProjectFilterSelect />
        <ProjectFilterTooltip />
      </div>
      {/* tagList: */}
      <ProjectFilterBadges />
    </motion.div>
  );
}
