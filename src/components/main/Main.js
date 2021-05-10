import '../../scss/main.scss';
import { Link } from 'react-router-dom';
//components:
import Nav from './Nav';
const Main = () => {
  return (
    <>
      <Nav />
      <div className="row">
        <div className="col">
          <div className="project">
            <h5>title</h5>
            <div className="tags"></div>
            <p>lorem ipsum dolor sic amet, consectetur adipiscing elit</p>
            <div className="links">
              <Link to="route" target="_blank" rel="noopener noreferrer" />
              <Link to="route" target="_blank" rel="noopener noreferrer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
