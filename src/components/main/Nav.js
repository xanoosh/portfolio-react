import NavEl from './NavEl';
const Nav = ({ projectList }) => {
  const navContent = projectList.map((project) => (
    <NavEl path={project.path} title={project.title} id={project.id} />
  ));
  return <ul>{navContent}</ul>;
};

export default Nav;
