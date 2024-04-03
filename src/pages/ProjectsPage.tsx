import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import { projectsArray } from '../globals';
import { SingleProjectInterface } from '../interfaces';
import { useMemo, useState } from 'react';

export default function ProjectsPage() {
  const [activeBadges, setActiveBadges] = useState<string[]>([]);
  const [activeProjects, setActiveProjects] = useState<
    SingleProjectInterface[]
  >([]);

  useMemo(() => {
    if (activeBadges.length === 0) {
      setActiveProjects(projectsArray);
    } else {
      const newProjectsArray = projectsArray.filter((project) =>
        activeBadges.every((badge) => project.badges.includes(badge))
      );
      setActiveProjects(newProjectsArray);
    }
  }, [activeBadges]);

  const handleBadgeClick = (badgeName: string) => {
    if (activeBadges.includes(badgeName)) {
      setActiveBadges((prev) => prev.filter((el) => el !== badgeName));
    } else {
      setActiveBadges((prev) => [...prev, badgeName]);
    }
  };

  return projectsArray.length ? (
    <>
      <div className="m-6">
        <ProjectFilter
          activeBadges={activeBadges}
          setActiveBadges={setActiveBadges}
          handleBadgeClick={handleBadgeClick}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 mx-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {activeProjects.map(({ title, description, badges, buttons }, i) => (
          <ProjectCard
            key={i}
            title={title}
            description={description}
            badges={badges}
            buttons={buttons}
          />
        ))}
      </div>
    </>
  ) : (
    <small>no projects available</small>
  );
}
