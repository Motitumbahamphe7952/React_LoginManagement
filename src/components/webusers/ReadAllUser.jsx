
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import WebUserReadAllUserUI from "./WebUserReadAllUserUI";
import Swal from "sweetalert2";
import axios from "../../axiosConfig.js";


const ReadAllUser = () => {
  let [user, setUser] = useState([]);

  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users`,
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleView = (id) => {
    return (e) => {
      navigate(`/admin/${id}`);
    };
  };

  const handleDelete = (id) => {
    return async (e) => {
      Swal.fire({
        title: "Are you sure? You want to Delete",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            let result = await axios({
              url: `${bUrl}/web-users/${id}`,
              method: "delete",
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              }
            });
            getData();
            toast.success(result.data.message);
          } catch (error) {
            toast.error(error.response.data.message);
          }
        }
      });
    };
  };

  const handleUpdate = (id) => (e) => {
    navigate(`/admin/update/${id}`);
  };


  return (
    <WebUserReadAllUserUI
      handleView={handleView}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      users={user}
    ></WebUserReadAllUserUI>
  );
};

export default ReadAllUser;
