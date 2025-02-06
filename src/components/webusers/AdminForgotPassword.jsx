import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig.js";

const AdminForgetPassword = () => {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/forgot-password`,
        method: "post",
        data: data,
      });

      setEmail("");
      toast.success("Link has been sent to your email to reset password.")
      //   localStorage.removeItem("token");
      //   navigate("/admin/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button type="submit">Forgot Password</button>
      </form>
    </div>
  );
};

export default AdminForgetPassword;
