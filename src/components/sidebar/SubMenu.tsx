import React from 'react';
import { NavLink } from 'react-router-dom';

const Submenu = ({ menu }: any) => {
  console.log('MENU', menu);
  return (
    <li id={menu.id} className="px-4 py-1">
      <NavLink
        to={menu?.path}
        className={({ isActive }) => {
          return `h-auto py-2 flex justify-start items-center truncate hover:bg-primary-800 hover:text-primary-100 rounded-xl ${
            isActive && 'text-primary-main bg-primary-700'
          }`;
        }}
      >
        <p className="font-openSans mx-3 text-[14px] font-normal tracking-wider">
          {menu?.displayName}
        </p>
      </NavLink>
    </li>
  );
};

export default Submenu;
