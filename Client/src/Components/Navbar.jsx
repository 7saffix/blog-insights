// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/services'}>Services</Link></li>
              <li><Link to={'/blogs'}>Blogs</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
              
              
            </ul>
          </div>
         <div className="flex cursor-pointer ">
            <img src="/logo.png" alt="insights"  />
            <a className="text-xl font-semibold ps-1 ">insights</a>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/services'}>Services</Link></li>
              <li><Link to={'/blogs'}>Blogs</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/admin'} className="btn me-1">Dashboard</Link>
          {/* <Link to={'/login'} className="btn">Login</Link> */}
        </div>
      </div>
    );
};

export default Navbar;