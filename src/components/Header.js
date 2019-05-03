import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand">ToDo</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
