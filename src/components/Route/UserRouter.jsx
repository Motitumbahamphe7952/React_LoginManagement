import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateUser from "../user/CreateUser";
import ReadAllUser from "../user/ReadAllUser";
import UserDetails from "../user/UserDetails";
import UpdateUser from "../user/UpdateUser";
import PageNotFound from "../PageNotFound";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateUser></CreateUser>}></Route>
      <Route path="/" element={<ReadAllUser></ReadAllUser>}></Route>
      <Route path="/:id" element={<UserDetails></UserDetails>}></Route>
      <Route path="/update/:id" element={<UpdateUser></UpdateUser>}></Route>
      <Route path="/:id/*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
  );
};

export default UserRouter;

/* 
    localhost:5173/user/create     => Create user
    localhost:5173/user     =>  Read all user
    localhost:5173/user/:id    =>  Read specific user
    localhost:5173/user/update/:id   =>  Update specifc user
*/
