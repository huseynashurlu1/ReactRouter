import React, { Component } from 'react'
import Logo from './Logo';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="container">
              <div className="row align-items-center">
                  <Logo/>
                  <Navbar title="ANA SƏHIFƏ" menu="Menyu"/>
              </div>
          </div>
      </header>
    )
  }
}

export default Header;