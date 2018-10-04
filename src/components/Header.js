import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss';

const Header = () => (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="brand">
              <h1>The World Bank <span>Data</span></h1>
          </div>    
          <nav className="nav-group">
              <Link to="/regions" className="link">Regions</Link>
          </nav>
        </div>  
      </div>  
    </div>
);

export default Header;