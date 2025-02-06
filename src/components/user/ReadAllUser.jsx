import axios from "axios";
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReadAllUserUI from "./ReadAllUserUI";
import Swal from "sweetalert2";

const ReadAllUser = () => {
  let [user, setUser] = useState([]);

  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/user`,
        method: "get",
      });

      setUser(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleView = (id) => {
    return (e) => {
      navigate(`/user/${id}`);
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
              url: `${bUrl}/user/${id}`,
              method: "delete",
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

  // const handleUpdate = (id) => {
  //   return (e) => {
  //     navigate(`/user/update/${id}`);
  //   };
  // };
  const handleUpdate = (id) => (e) => {
    navigate(`/user/update/${id}`);
  };

  console.log(user);

  return (
    <ReadAllUserUI
      handleView={handleView}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      users={user}
    ></ReadAllUserUI>

    // <div>
    //   <h2>Users</h2>
    //   <table border="1" cellPadding="5" cellSpacing="0">
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Password</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {user.map((item, i) => (
    //         <tr key={i}>
    //           <td>{item.name}</td>
    //           <td>{item.email}</td>
    //           <td>{item.password}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>

    // </div>
  );
};

export default ReadAllUser;
