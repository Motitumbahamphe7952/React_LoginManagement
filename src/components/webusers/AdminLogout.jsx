import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../../App";

const AdminLogout = () => {
  let global = useContext(GlobalVariableContext);
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    global.setToken(null);
    navigate("/");
  }, []);

  // navigate can be used inside useEffect or buttonclick
  return <div>AdminLogout</div>;
};

export default AdminLogout;
