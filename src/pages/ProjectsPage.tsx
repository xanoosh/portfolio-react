import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import { projectsArray } from '../globals/globals';
import { AnimatePresence } from 'framer-motion';
import { useActiveBadgesStore } from '../store/store';

export default function ProjectsPage() {
  const { activeBadges, activeProjects, setActiveBadges, handleBadgeClick } =
    useActiveBadgesStore();

  return projectsArray.length ? (
    <div className="flex flex-col gap-6 py-6 px-6 sm:px-12">
      <title>Portfolio | Projects</title>
      <meta
        name="description"
        content="Explore my projects and experience in the field of frontend development. Technologies: React, TypeScript, Tailwind CSS, Vite, Framer Motion, GraphQL, Redux, and more."
      />
      <div className="">
        <ProjectFilter
          activeBadges={activeBadges}
          setActiveBadges={setActiveBadges}
          handleBadgeClick={handleBadgeClick}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <AnimatePresence>
          {activeProjects.map(({ title, description, badges, buttons }, i) => (
            <ProjectCard
              key={i}
              title={title}
              description={description}
              badges={badges}
              activeBadges={activeBadges}
              handleBadgeClick={handleBadgeClick}
              buttons={buttons}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  ) : (
    <small>no projects available</small>
  );
}
