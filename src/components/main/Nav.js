import { useState } from 'react';
import NavEl from './NavEl';
const Nav = ({ projects }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleClick = () => {
    console.log('handleClick');
    setMenuVisible(!menuVisible);
  };
  const navContent = projects.map((project) => (
    <NavEl path={project.path} title={project.title} id={project.id} />
  ));
  const navClass = menuVisible ? 'show' : '';
  return (
    <nav>
      <ul className={navClass}>{navContent}</ul>
      <span className="toggler" onClick={handleClick}></span>
    </nav>
  );
};

export default Nav;
