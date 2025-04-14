// RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyNav from '../components/StickyNav';


const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
  <StickyNav/>
    </div>
  );
};

export default RootLayout;
