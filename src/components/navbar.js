import React from 'react'
import {Link} from 'react-router-dom'



const NavBar = () => {
  return(
      <>
    <nav className="nav-extended">
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo">Blog API</Link>
      <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><Link to="/">Test 1</Link></li>
        <li className="tab"><Link to="/2">Test 2</Link></li>
        <li className="tab"><Link to="/3">Test 3</Link></li>
        <li className="tab"><Link to="/4">Test 4</Link></li>
      </ul>
    </div>
  </nav>
   </>     
   )

 }

export default NavBar