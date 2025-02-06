
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import "../../css/crud.css";
import axios from "../../axiosConfig.js";



const AdminUpdatePassword = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/update-password`,
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      navigate("/admin/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="create-user-form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password: </label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password: </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>

        <button className="submit-btn" type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminUpdatePassword;
