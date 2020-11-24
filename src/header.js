import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link className="navbar-brand ml-5" href="/"> <i className="fa fa-building fa-lg"></i> Real Estate APP</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item mr-4">
                <Link className="nav-link text-white" to="/"> <i className="fa fa-home"></i> Home</Link>
              </li>
              <li className="nav-item  mr-4">
                <Link className="nav-link text-white" to="/newproject">  <i className="fa fa-building"></i> Post Your Project</Link>
              </li>
              <li className="nav-item  mr-4">
                <Link className="nav-link text-white" to="/login"> <i className="fa fa-lock"></i>  Login</Link>
              </li>
              <li className="nav-item  mr-4">
                <Link className="nav-link text-white" to="/signup">  <i className="fa fa-user-plus"></i> Sign Up</Link>
              </li>
              

            </ul>
          </div>
        </nav>
    }
}

export default Header;