
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { bUrl } from "../../constant";
import axios from "../../axiosConfig.js";


const AdminVerify = () => {
  let [query] = useSearchParams();
  let token = query.get("token");
  let navigate = useNavigate();
  let verifyEmail = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users/verify-email`,
        method: "patch",
        headers: {
          "Authorization":`Bearer ${token}`,
        },
      });
      
      navigate("/admin/login");
    } catch (error) {}
  };
  useEffect(() => {
    verifyEmail();
  }, []);
  return <div>AdminVerify</div>;
};

export default AdminVerify;
