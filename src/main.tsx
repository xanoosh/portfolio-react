import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error text="error" />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loader />}>
            <ProjectsPage />
          </React.Suspense>
        ),
        errorElement: <Error text="error" />,
      },
      {
        path: 'about',
        element: (
          <React.Suspense fallback={<Loader />}>
            <AboutPage />
          </React.Suspense>
        ),
        errorElement: <Error text="error" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
