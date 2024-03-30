import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import { projectsArray } from '../globals';
import { useState } from 'react';

export default function ProjectsPage() {
  const [activeBadges, setActiveBadges] = useState<string[]>([]);

  const handleBadgeClick = (badgeName: string) => {
    if (activeBadges.includes(badgeName)) {
      setActiveBadges((prev) => prev.filter((el) => el !== badgeName));
    } else {
      setActiveBadges((prev) => [...prev, badgeName]);
    }
  };

  return projectsArray.length ? (
    <div className="flex flex-row flex-wrap gap-6">
      <ProjectFilter
        activeBadges={activeBadges}
        setActiveBadges={setActiveBadges}
        handleBadgeClick={handleBadgeClick}
      />
      {projectsArray.map(({ title, description, badges, buttons }, i) => (
        <ProjectCard
          key={i}
          title={title}
          description={description}
          badges={badges}
          buttons={buttons}
        />
      ))}
    </div>
  ) : (
    <small>no projects available</small>
  );
}
