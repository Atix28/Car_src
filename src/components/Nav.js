import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <div>
                <nav className="orange darken-3">
    <div className="nav-wrapper">
    <a href="/" className="brand-logo center">CARS</a>
      <a data-target="main-menu" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
     
      <ul id="nav-mobile" className="right hide-on-small-only">
        <li><Link to="/"><i className="fa fa-car"></i> CARS</Link></li>
      </ul>
    </div>
   
  </nav>

  <ul className="sidenav" id="main-menu">
  <li><Link to="/"><i className="fa fa-users"></i> Car</Link></li>
  <li><Link to="/car/add"><i className="fa fa-plus"></i>Add Cars</Link></li>
  <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
  </ul>
            </div>
        )
    }

}

export default Nav;
