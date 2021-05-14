//AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';
//hooks:
import { useEffect } from 'react';
//components:
import Nav from './Nav';
import SectionProjectCards from './SectionProjectCards';
import SectionImages from './SectionImages';
import Footer from './Footer';
//data:
import projectsData from './Data';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-container">
      <Nav projects={projectsData} />
      <SectionProjectCards projectList={projectsData} />
      <SectionImages />
      <Footer text="Example footer, all rights reserved &copy;" />
    </div>
  );
};

export default Main;
