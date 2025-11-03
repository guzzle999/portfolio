import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import  Navbar  from '../components/Navbar';
import { Footer } from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/aboutme";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;