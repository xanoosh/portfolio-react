// import '../../scss/main.scss';
// import { Link } from 'react-router-dom';
//components:
import Nav from './Nav';
import ProjectCards from './ProjectCards';

//list of projects:
const projectsData = [
  {
    path: '/quiz',
    title: 'Quiz',
    id: 0,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/poker-calculator',
    title: 'Texas Holdem Calculator',
    id: 1,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/recipe-app',
    title: 'Recipe app',
    id: 2,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/dice-app',
    title: 'Dice',
    id: 3,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/memory-app',
    title: 'Memory',
    id: 4,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/snake',
    title: 'Snake',
    id: 5,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/timezone-app',
    title: 'Timezone app',
    id: 6,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
  {
    path: '/map-generator',
    title: 'Map Generator',
    id: 7,
    tags: ['REST API', 'React', 'ES6', 'html', 'css'],
    description:
      'Quiz app with customizable categories, difficulty and number of questions. Fetches data from external API. ',
  },
];
const Main = () => {
  return (
    <>
      <Nav projects={projectsData} />
      <ProjectCards projectList={projectsData} />
    </>
  );
};

export default Main;
