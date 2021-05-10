import SingleProjectCard from './SingleProjectCard';

const ProjectCards = ({ projectList }) => {
  const projects = projectList.map((project) => (
    <SingleProjectCard
      id={project.id}
      title={project.title}
      path={project.path}
      tags={project.tags}
      description={project.description}
    />
  ));
  return (
    <section className="project-list">
      <div className="row">{projects}</div>
    </section>
  );
};

export default ProjectCards;
