import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Loader from './components/Loader/Loader';

const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loader />}>
            <ProjectsPage />
          </React.Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: 'about',
        element: (
          <React.Suspense fallback={<Loader />}>
            <AboutPage />
          </React.Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
