import ProjectCard from './components/ProjectCard/ProjectCard';
import Navbar from './components/Navbar/Navbar';
import { projectsArray } from './ProjectsArray';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-8 px-4 bg-pattern bg-no-repeat bg-center bg-cover">
        {projectsArray.length ? (
          <div className="flex flex-row flex-wrap gap-6 justify-center">
            {projectsArray.map(({ title, description, badges, buttons }, i) => (
              <ProjectCard
                key={i}
                title={title}
                description={description}
                badges={badges}
                buttons={buttons}
              />
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
