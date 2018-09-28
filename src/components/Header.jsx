import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
function Header(){
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">


          <Link to='/' className="navbar-header navbar-brand"> <img src={logo}/> </Link>



         <ul class="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
            <li clasName="nav-item dropdown">
             <button className="nav-link dropdown-toggle" href='/aboutus' id="navbardrop" data-toggle="dropdown" role="button"  aria-haspopup="true" aria-expanded="false">
               About
             </button>
             <div className="dropdown-menu">
               <Link className="dropdown-item" to='/pricing'>Pricing</Link>
               <Link className="dropdown-item" to='/routes'>Routes</Link>

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
