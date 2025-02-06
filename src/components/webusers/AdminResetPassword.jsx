
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import axios from "../../axiosConfig.js";


const AdminResetPassword = () => {
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let [params] = useSearchParams();
  let token = params.get("token");
  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      password: password,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/reset-password`,
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/admin/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button style={{cursor:"pointer"}} type="submit">Reset</button>
      </form>
    </div>
  );
};

export default AdminResetPassword;
