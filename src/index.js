import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/global.scss'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { ProjectDetails } from './views/ProjectDetails';

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
