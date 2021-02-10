import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../configs/firebase.config.js';
import { connect } from 'react-redux';

const Navbar = ({ currentUser }) => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className="container">
        <NavLink to='/' className='brand-logo hide-on-med-and-down'>MakeStories</NavLink>
        {/* <a href="#" className="s3 sidenav-trigger"><i className="material-icons">menu</i></a> */}
        {/* <div className='brand-logo'>MakeStories</div> */}
        <div className='navbar__links '>
            <ul className="right">
              <li className=" ">
                <NavLink to='/'>Home</NavLink>
              </li>
              
              {!currentUser? (
                <li>
                <NavLink to='/sign-in'>Sign In</NavLink>
                </li>
              ) : null}

          
              {!currentUser? (
                <li>
               <NavLink to='/sign-up'>Sign Up</NavLink>
                </li>
              ) : null}
        
              {currentUser && currentUser ? (
                <li>
               <NavLink to='/' onClick={() => auth.signOut()}>Sign Out</NavLink>
               {/* <button onClick={() => auth.signOut()}>Sign out</button> */}
                </li>
              ) : null}
            </ul>
          </div>
          </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
