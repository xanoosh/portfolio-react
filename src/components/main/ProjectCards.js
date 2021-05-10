import SingleProjectCard from './SingleProjectCard';

const ProjectCards = ({ projectList }) => {
  // let AOSanimationDelay = 0;
  const projects = projectList.map((project, index) => (
    <SingleProjectCard
      key={project.id}
      title={project.title}
      path={project.path}
      tags={project.tags}
      description={project.description}
      delayValue={index * 100}
    />
  ));
  return (
    <section className="project-list">
      <div className="row">{projects}</div>
    </section>
  );
};

export default ProjectCards;
