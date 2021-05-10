//AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';
//hooks:
import { useEffect } from 'react';
//components:
import Nav from './Nav';
import ProjectCards from './ProjectCards';
//data:
import projectsData from './Data';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav projects={projectsData} />
      <ProjectCards projectList={projectsData} />
    </>
  );
};

export default Main;
