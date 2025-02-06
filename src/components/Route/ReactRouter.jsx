import React, { useContext } from "react";
import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";
import ReviewRouter from "./ReviewRouter";

import { Route, Routes, Outlet } from "react-router-dom";
import ReactLink from "../ReactLink";
import PageNotFound from "../PageNotFound";
import AdminRegister from "../webusers/AdminRegister";
import AdminVerify from "../webusers/AdminVerify";
import AdminLogin from "../webusers/AdminLogin";
import AdminProfile from "../webusers/AdminProfile";
import AdminLogout from "../webusers/AdminLogout";
import AdminProfileUpdate from "../webusers/AdminProfileUpdate";
import AdminUpdatePassword from "../webusers/AdminUpdatePassword";
import AdminForgotPassword from "../webusers/AdminForgotPassword";
import AdminResetPassword from "../webusers/AdminResetPassword";
import ReadAllUser from "../webusers/ReadAllUser";
import ReadSpecificUser from "../webusers/ReadSpecificUser";
import UpdateSpecificUser from "../webusers/UpdateSpecificUser";
import { GlobalVariableContext } from "../../App";
import HomePage from "../webusers/HomePage";
import AdminDashBoard from "../webusers/AdminDashBoard";

const ReactRouter = () => {
  let { token, settoken } = useContext(GlobalVariableContext);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ReactLink></ReactLink>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route index element={<HomePage></HomePage>}></Route>
          <Route
            path="reset-password/*"
            element={<AdminResetPassword></AdminResetPassword>}
          ></Route>
          <Route
            path="verify-email/*"
            element={<AdminVerify></AdminVerify>}
          ></Route>
          {/* <Route path="/user/*" element={<UserRouter></UserRouter>}></Route>
          <Route
            path="/product/*"
            element={<ProductRouter></ProductRouter>}
          ></Route>
          <Route
            path="/review/*"
            element={<ReviewRouter></ReviewRouter>}
          ></Route> */}

          <Route
            path="admin"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            {token ? (
              <>
                <Route
                  index
                  element={<AdminDashBoard></AdminDashBoard>}
                ></Route>
                <Route
                  path="update-password"
                  element={<AdminUpdatePassword></AdminUpdatePassword>}
                ></Route>
                <Route
                  path="profile-update"
                  element={<AdminProfileUpdate></AdminProfileUpdate>}
                ></Route>
                <Route
                  path="logout"
                  element={<AdminLogout></AdminLogout>}
                ></Route>
                <Route
                  path="my-profile"
                  element={<AdminProfile></AdminProfile>}
                ></Route>
                <Route
                  path="read-all-user"
                  element={<ReadAllUser></ReadAllUser>}
                ></Route>

                <Route
                  path=":id"
                  element={<ReadSpecificUser></ReadSpecificUser>}
                ></Route>
                <Route
                  path="update"
                  element={
                    <div>
                      <Outlet></Outlet>
                    </div>
                  }
                >
                  <Route
                    path=":id"
                    element={<UpdateSpecificUser></UpdateSpecificUser>}
                  ></Route>
                </Route>
              </>
            ) : (
              <>
                <Route path="login" element={<AdminLogin></AdminLogin>}></Route>
              </>
            )}
            <Route
              path="register"
              element={<AdminRegister></AdminRegister>}
            ></Route>
            <Route
              path="forgot-password"
              element={<AdminForgotPassword></AdminForgotPassword>}
            ></Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;

/* 
while getting token
  add token to useContext from localStorage

  if other component needs token 
  get token from useContext rather than localStorage (for refresh purpose)


while change token
  change to localStorage
  change to useContext

*/
