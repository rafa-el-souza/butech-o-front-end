import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
  return (
    <main className="App">
      <NavBar />
      {/* Any components apart from <Outlet/> will be rendered in all child routes. */}
      <Outlet />
      {/* <Outlet/> acts as a placeholder for child routes.
      Active child routes are rendered here. */}
    </main>
  );
}

export default Layout;
