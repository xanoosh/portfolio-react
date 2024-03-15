import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import { projectsArray } from './ProjectsArray';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-8 px-4 bg-pattern bg-no-repeat bg-center bg-cover">
        {projectsArray.length ? (
          <div className="flex flex-row flex-wrap gap-6">
            {projectsArray.map((project, i) => (
              <ProjectCard key={i} projectData={project} />
            ))}
          </div>
        ) : (
          <small>no projects available</small>
        )}
      </section>
    </main>
  );
}

export default App;
