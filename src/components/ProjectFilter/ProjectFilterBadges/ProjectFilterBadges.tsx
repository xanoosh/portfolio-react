import { AnimatePresence, motion } from 'framer-motion';
import { useActiveBadgesStore } from '../../../store/store';
import Badge from '../../Badge/Badge';

export default function ProjectFilterBadges() {
  const { activeBadges, handleBadgeClick } = useActiveBadgesStore();
  return (
    <div
      aria-label="project-filter-badges"
      className="flex gap-4 items-center flex-wrap"
    >
      {activeBadges.length === 0 ? (
        <p className="text-slate-400 text-sm pl-1">No active tag selected.</p>
      ) : null}
      {activeBadges.length > 0 ? (
        <AnimatePresence>
          {activeBadges.map((activeBadge, i) =>
            activeBadge ? (
              <motion.div
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: -5,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  type: 'tween',
                }}
                key={i}
              >
                <Badge
                  text={activeBadge}
                  variant="pink"
                  size="sm"
                  handleRemove={() => handleBadgeClick(activeBadge)}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      ) : null}
    </div>
  );
}
