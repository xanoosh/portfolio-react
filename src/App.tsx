import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar
        navigation={[
          { name: 'Projects', link: '' },
          { name: 'About', link: 'about' },
        ]}
      />
      <section className="py-8 px-4 bg-pattern bg-no-repeat bg-center bg-cover min-h-screen">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
