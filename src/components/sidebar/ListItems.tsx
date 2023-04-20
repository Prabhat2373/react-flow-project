import React, { useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import UpArrow from '../../assets/icons/UpArrow';
import DownArrow from '../../assets/icons/DownArrow';
import Submenu from './SubMenu';

const ListItems = (props: any) => {
  console.log('props', props);
  return (
    <li className="w-full h-auto flex flex-col justify-center items-center">
      <div
        id={props.id}
        className="w-full h-auto  flex flex-col justify-center items-center"
      >
        <div className="w-[calc(100%-16px)] h-auto flex flex-col justify-center items-center transition-all">
          {props.expand ? (
            <>
              <NavLink
                to={props?.path}
                className={({ isActive }) => {
                  return `font-openSans w-full h-auto py-2 my-[2px] hover:bg-primary-800 hover:text-primary-100 rounded-lg ${
                    isActive && 'text-primary-main'
                  } ${
                    isActive && 'bg-primary-800 text-primary-main font-bold'
                  }`;
                }}
                onClick={(e) => {
                  !props?.element && e.preventDefault();
                  if (!!props?.subMenu) {
                    props.setMenuExpand(
                      props.id != props.menuExpand ? props.id : ''
                    );
                  }
                }}
              >
                {/* <div className="mx-4 flex justify-start items-center">
                  <div className="w-full h-auto flex justify-start items-center">
                    <props.iconClass
                      style={{ width: '1.25rem', height: '1.25rem' }}
                      className={`hover:text-primary-100`}
                    />
                    <p className="font-openSans mx-3 text-[14px] font-normal truncate tracking-wider">
                      {props?.displayName}
                    </p>
                  </div>
                  {props?.subMenu && (
                    <div className="place-items-end">
                      {props.menuExpand == props.id ? (
                        <UpArrow />
                      ) : (
                        <DownArrow />
                      )}
                    </div>
                  )}
                </div> */}

                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    {props?.iconClass}
                    <span className="ml-2">{props?.displayName}</span>
                  </div>
                </li>
              </NavLink>
              {props?.subMenu && (
                <ul
                  className={`${
                    props.menuExpand == props.id ? 'inline-block' : 'hidden'
                  } w-[180px] ml-[8px] h-auto relative border-l-2 border-bgColor-200 transition-all`}
                >
                  {props?.subMenu?.map(
                    (menu: any, index: number) =>
                      !!!menu.isHidden && (
                        <Submenu
                          key={props.id + index}
                          menu={menu}
                          id={props?.id}
                          menuExpand={props?.menuExpand}
                          setMenuExpand={props.setMenuExpand}
                        />
                      )
                  )}
                </ul>
              )}
            </>
          ) : (
            <div className="w-full h-6 flex justify-center items-center my-2">
              <NavLink
                to={props?.path}
                className={({ isActive }) =>
                  `w-auto h-auto py-2 px-4 ${
                    isActive && `bg-primary-700 rounded-lg text-primary-main`
                  }`
                }
              >
                <props.iconClass style={{ width: '20px', height: '20px' }} />
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {!!props.defaultLine && (
        <div className="w-[calc(100%-32px)] h-0 border-b border-bgColor-100 bg-bgColor-200 my-4 mx-0 outline-none"></div>
      )}
    </li>
  );
};
export default ListItems;
