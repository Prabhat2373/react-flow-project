import React, { useState } from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';

import { routes } from '../routes/RouteList';
import Sidebar from '../components/sidebar/SIdebar';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  const [show, setShow] = useState(true);
  const [profile, setProfile] = useState(false);
  console.log('route type', typeof routes);
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex flex-no-wrap">
        <Sidebar routeList={routes} />

        <div className="w-full">
          <Navbar
            profile={profile}
            setProfile={setProfile}
            setShow={setShow}
            show={show}
          />
          {/* OUTLET  */}

          <div>{/* <Outlet/>  */}</div>
        </div>
      </div>
    </div>
    // <Layout2 />
  );
};

export default Layout;
