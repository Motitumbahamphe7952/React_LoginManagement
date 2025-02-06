import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";

import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axiosConfig.js";


const ReadSpecificUser = () => {
  let token = localStorage.getItem("token");
  let [user, setUser] = useState({});
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let getAdminUser = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users/${id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    //   console.log(result.data.data);
      setUser(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAdminUser();
  }, []);

  return (
    <div>
      <p>FullName: {user.fullName}</p>
      <p>Gender: {user.gender}</p>
      <p>Date of Brith: {new Date(user.dob).toLocaleDateString()}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <button onClick={() => {navigate(`/admin/update/${id}`)}}>
        Update User
      </button>
    </div>
  );
};

export default ReadSpecificUser;

/* 
MY user
link => /admin/my-user
route => /admin/my-user => AdminUser
AdminUser
    hit api on page load (useEffect)
    token => get token from local storage

    
logout
link => /admin/logout
route => /admin/logout => AdminLogout
AdminLogout
    hit api
    clear token from local storage
    redirect to /admin/login




*/
