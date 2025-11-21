import { Link } from 'react-router-dom';
import Error from '../components/Error/Error';
import { HomeIcon } from '@heroicons/react/16/solid';

export default function ErrorPage() {
  return (
    <main className="bg-pattern bg-no-repeat bg-center bg-cover bg-fixed h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center backdrop-blur-sm p-6 rounded-lg shadow bg-slate-800/50">
        <h1 className="text-rose-600 font-bold text-4xl text-center">404</h1>
        <Error text="page not found" />
        <Link
          className="py-1.5 px-4 rounded-lg text-md flex flex-row gap-1.5 items-center justify-center transition-bg duration-300 ease-in-out focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 bg-sky-700 ring-sky-700 text-white hover:bg-pink-600 hover:ring-pink-600 cursor-pointer"
          to="/"
        >
          <HomeIcon className="w-4 h-4" /> <span>Home</span>
        </Link>
      </div>
    </main>
  );
}
