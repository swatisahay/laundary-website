import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
function Header(){
  return (
    <div>
      <nav className="navbar navbar-default bg-light">
        <div className="navbar-header navbar-brand">
          <Link to='/'> <img src={logo}/> </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="nav-item"><Link className="nav-link" to='/home'>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/aboutus'>About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/sevices'>Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/schedule'>Schedule Pick-Up</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/contact'>Contact Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/login'>LogIn</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          border-bottom: 1px solid black;
        }
        img{
          height: 100px;
          width: 100px;
        }
        li {
          display: inline-flex;

        }
        ul {
          list-style-type: none;
        }
      `}</style>
    </div>
  );
}

export default Header;
