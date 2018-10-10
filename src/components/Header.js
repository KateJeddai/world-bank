import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss';
import logo from './img/logo.png';

const Header = () => (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="brand">
             <Link to="/" className="link brand-link">
               <img src={logo} alt="logo" /><span>Data</span>
             </Link> 
          </div>    
          <nav className="nav-group">
              <Link to="/regions" className="link nav-link">Regions</Link>
              <Link to="/countries" className="link nav-link">Countries</Link>
          </nav>
        </div>  
      </div>  
    </div>
);

export default Header;