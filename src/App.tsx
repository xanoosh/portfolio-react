import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { storybookLink } from './globals/globals';

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
      <section className="bg-pattern bg-no-repeat bg-center bg-cover bg-fixed min-h-screen">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
