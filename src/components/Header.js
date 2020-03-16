import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui stackable large menu top fixed">
      <Link to="/" className="item">
        <h4 className="ui header blue">
          <i className="tasks icon"></i>
          <div className="content">TaskMgr</div>
        </h4>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          About
        </Link>
        <Link to="/auth/signup" className="item">
          <div className="ui primary basic button">Sign Up</div>
        </Link>
        <Link to="/auth/signin" className="item">
          <div className="ui primary button">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
