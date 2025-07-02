import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Logo from '../assets/images/logo.png';
import LogoTow from '../assets/images/footer-logo.png';
import { AuthContext } from "../Provider/AuthProvider";
import useTheme from "../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const { theme, toggleTheme } = useTheme();
  const menuItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/upcoming-events">All Upcoming Events</Link></li>
      {!user && <li><Link to="/login">Login</Link></li>}
      {user && <>
        <li><Link to="/create-event">Create Event</Link></li>
        <li><Link to="/manage-events">Manage Events</Link></li>
        <li><Link to="/joined-events">Joined Events</Link></li>
      </>}
    </>
  );

  const profileDropdown = (
    <ul className="menu menu-sm dropdown-content right-0 z-[1] mt-3 w-[150px] rounded-box bg-base-100 p-2 shadow">
      <li><button className="bg-red-500 text-white" onClick={logOut}>Logout</button></li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-30 w-full top-0">
      {/* Navbar Start - Mobile */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">{theme === 'light' ? <img src={Logo} width={100} alt="" /> : <img src={LogoTow} width={100} alt="" />}</Link>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>

      {/* Navbar End - Profile/Logout */}
      <div className="navbar-end space-x-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="Profile" title={user?.displayName} />
              </div>
            </div>
            {profileDropdown}
          </div>
        ) : (
          <></>
        )}
        <button onClick={toggleTheme} className="btn w-[100px] btn-outline rounded-full">
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          <span className="ml-2">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
