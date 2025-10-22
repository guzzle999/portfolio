import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import Home from './views/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;