import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import "./breadcrumbs.css";

function Breadcrumbs() {
  const location = useLocation();

  return (
    
    <nav className='bread'>
<Link to="/"
className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
                Dashboard
      </Link>
 <span className="breadcrumb-arrow">|</span>
      <Link to="atlantic" id='atlas'
        className={location.pathname.startsWith("/atlantic") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
           Atlantic Hall School
      </Link>
  <span className="breadcrumb-arrow">|</span>
      <Link to="/mechanical"
        className={location.pathname.endsWith("mechanical") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Mechanical
      </Link>
    </nav>
  );
}

export default Breadcrumbs;
