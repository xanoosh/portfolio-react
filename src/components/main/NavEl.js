import { Link } from 'react-router-dom';

const NavEl = ({ path, title, id }) => (
  <li key={id}>
    <Link to={path} target="_blank" rel="noopener noreferrer">
      {title}
    </Link>
  </li>
);

export default NavEl;
