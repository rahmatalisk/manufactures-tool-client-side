import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from './Loading';




const Header = () => {
  const [user, loading] = useAuthState(auth);
  const handleSingnOut = () => {
    signOut(auth)
  }
  if(loading){
    return <Loading></Loading>
  }
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>
    {
      user && <li><Link to="/dashboard">Dashboard</Link></li>
    }
    <li>{user ? <button className="btn btn-ghost" onClick={handleSingnOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
  </>
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}

          </ul>
        </div>
        <Link to="/" className='text-xl md:text-4xl font-bold'>E-
          <span className='text-amber-500'>TO</span>OLS</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
      </div>
    </div>
  )
};

export default Header;