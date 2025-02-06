//

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../App";


const ReactLink = () => {
  let global = useContext(GlobalVariableContext);

  return (
    <div className="nav-links">
      {/* <NavLink to="/user" className="nav-link" activeClassName="active">
        User
      </NavLink>
      <NavLink to="/user/create" className="nav-link" activeClassName="active">
        Create User
      </NavLink>
      <NavLink to="/product" className="nav-link" activeClassName="active">
        Product
      </NavLink>
      <NavLink to="/product/create" className="nav-link" activeClassName="active">
        Create Product
      </NavLink> */}

      {global.token ? (
        <>
          <NavLink
            to="/admin/my-profile"
            className="nav-link"
            activeClassName="active"
          >
            My Profile
          </NavLink>
          <NavLink
            to="/admin/read-all-user"
            className="nav-link"
            activeClassName="active"
          >
            Read All User
          </NavLink>
          <NavLink
            to="/admin/update-password"
            className="nav-link"
            activeClassName="active"
          >
            Update Password
          </NavLink>
          <NavLink
            to="/admin/logout"
            className="nav-link"
            activeClassName="active"
          >
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/admin/login"
            className="nav-link"
            activeClassName="active"
          >
            Admin Login
          </NavLink>
          <NavLink
            to="/admin/register"
            className="nav-link"
            activeClassName="active"
          >
            Admin Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ReactLink;
