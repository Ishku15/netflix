import { ArrowDropDown, LaptopWindows, Notifications, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import './navbar.scss'
import {logOut} from '../../authContext/ApiCalls'
const Navbar = () => {
    const {user,dispatch} = useContext(AuthContext)
    const handleLogout = () => {
        logOut(dispatch)
    }
    const [isScrolled , setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
  return (
  <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
              <Link to="/" className='link'><span>Homepage</span></Link>
              <Link className='link ' to="/movies"><span className='mainlink'>Movies</span></Link>
              <Link className='link ' to="/series"><span className='mainlink'>Series</span></Link>
              <Link className='link' to="/"><span>New and Popular</span></Link>
              <Link className='link' to="/"><span>My List</span></Link>
          </div>
          <div className="right">
              <Search className='icon'/>
              <span>KID</span>
              <Notifications className='icon'/>
              <img src={user.profilePic} alt="" />
              <div className="profile">
              <ArrowDropDown className='icon'/>
              <div className="options">
                  <span>Settings</span>
                  <span onClick={handleLogout}>Logout</span>
              </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Navbar;
