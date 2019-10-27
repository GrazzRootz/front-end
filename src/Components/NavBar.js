import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <Link to="/nearby-polls">Community Questions</Link>
        <Link to="/profile">Profile</Link>&nbsp;
        <Link to="/events">Events</Link>&nbsp;
        <Link to="/garden-api">Gardens</Link>
      </span>
    )}
    
    </div>
  );
};

export default NavBar;
