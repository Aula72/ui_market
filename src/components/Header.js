import React from 'react'
import {  Link } from "react-router-dom"
class Header extends React.Component{
	render(){
		return (
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/sellers">Sellers</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link disabled" to="/categories">Categories</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/products">Products</Link>
    </li>
    
  </ul>
</nav>
			)
	}
}

export default Header;