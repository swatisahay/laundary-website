import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
function Header(){
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">


        <Link to='/' className="navbar-header navbar-brand"> <img src={logo}/> </Link>



        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/aboutus' id="navbardrop" data-toggle="dropdown" role="button"  aria-haspopup="true" aria-expanded="false">
               About
            </Link>
            <div className="dropdown-menu">
              <a className="dropdown-item" href='/pricing'>Pricing</a>
              <a className="dropdown-item" href='/routes'>Routes</a>

            </div>
          </li>
          <li className="nav-item"><Link className="nav-link" to='/services'>Services</Link></li>
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
          float: left;
        }
        li {
          display: inline-block;


        }
        ul {
          list-style-type: none;
          float: right;
          padding-top: 30px;
        }
      `}</style>
    </div>
  );
}

export default Header;
