import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { storybookLink } from './globals';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar
        navigation={[
          { name: 'Projects', link: '' },
          { name: 'About', link: 'about' },
        ]}
        storybookLink={storybookLink}
      />
      <section className="py-8 px-4 bg-pattern bg-repeat-y bg-pattern-size min-h-screen">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
