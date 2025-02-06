import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../../App";
import axios from "../../axiosConfig.js";


const AdminLogin = () => {
  let navigate = useNavigate();

  let global = useContext(GlobalVariableContext);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/login`,
        method: "post",
        data: data,
      });

      let token = result.data.token;
      localStorage.setItem("token", token);
      global.setToken(token);

      navigate("/admin");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="create-user-form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            placeholder="Eg: abc@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
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

        <button className="submit-btn" type="submit">Proceed</button>
        <br /><br />
        <div 
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/admin/forgot-password");
          }}
        >
          Forgot Password
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

//login
/* 
make form
hit api (token)
save token to local storage
/admin

*/
//profile
