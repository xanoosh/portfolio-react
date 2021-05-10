import NavEl from './NavEl';
const Nav = ({ projects }) => {
  const navContent = projects.map((project) => (
    <NavEl path={project.path} title={project.title} id={project.id} />
  ));
  return (
    <nav>
      <ul>{navContent}</ul>
      <span className="toggler"></span>
    </nav>
  );
};

export default Nav;
