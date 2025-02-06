import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import "../../css/crud.css";
import axios from "../../axiosConfig.js";


const AdminProfile = () => {
  let token = localStorage.getItem("token");
  let [profile, setProfile] = useState({});
  let navigate = useNavigate();
  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users/my-profile`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log(result.data.data);
      setProfile(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div className="create-user-form">
      <p>FullName: {profile.fullName}</p>
      <p>Gender: {profile.gender}</p>
      <p>Date of Brith: {new Date(profile.dob).toLocaleDateString()}</p>
      <p>Email: {profile.email}</p>
      <p>Role: {profile.role}</p>

      <button
        className="submit-btn"
        onClick={() => [navigate("/admin/profile-update")]}
      >
        Update Profile
      </button>
    </div>
  );
};

export default AdminProfile;

/* 
MY profile
link => /admin/my-profile
route => /admin/my-profile => AdminProfile
AdminProfile
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
