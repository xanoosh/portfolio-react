import NavEl from './NavEl';
const Nav = ({ projects }) => {
  const navContent = projects.map((project) => (
    <NavEl path={project.path} title={project.title} id={project.id} />
  ));
  return <ul>{navContent}</ul>;
};

export default Nav;
