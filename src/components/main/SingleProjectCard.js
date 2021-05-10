import { Link } from 'react-router-dom';

const SingleProjectCard = ({ title, tags, description, path }) => {
  const tagElements = tags.map((tag) => <div className="tag">{tag}</div>);
  return (
    <div className="col">
      <div className="project">
        <h5>{title}</h5>
        <div className="tag-list">{tagElements}</div>
        <p>{description}</p>
        <div className="links">
          <Link to={path} target="_blank" rel="noopener noreferrer">
            Link1
          </Link>
          <Link to="route" target="_blank" rel="noopener noreferrer">
            Link2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
