import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      
        <a className="navbar-item" href="https">
          <h1>SupaFilta</h1>
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
   
      </div>
    </nav>
    )
  }
}
export default Navbar;