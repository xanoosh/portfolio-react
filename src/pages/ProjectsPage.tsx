import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projectsArray } from '../ProjectsArray';

export default function ProjectsPage() {
  return projectsArray.length ? (
    <div className="flex flex-row flex-wrap gap-6 justify-center">
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
