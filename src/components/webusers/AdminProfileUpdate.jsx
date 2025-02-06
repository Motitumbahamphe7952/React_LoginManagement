// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { bUrl } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const AdminProfileUpdate = () => {
//   let [fullName, setFullName] = useState("");
//   let [dob, setDob] = useState("");
//   let [gender, setGender] = useState("");
//   let navigate = useNavigate();
//   let token = localStorage.getItem("token");

//   let genderOption = [
//     {
//       value: "male", //item.value
//       label: "Male", //item.label
//     },
//     {
//       value: "female",
//       label: "Female",
//     },
//     {
//       value: "other",
//       label: "Other",
//     },
//   ];

//   let onSubmit = async (e) => {
//     e.preventDefault();
//     let data = {
//       fullName: fullName,
//       dob: dob,
//       gender: gender,
//     };

//     try {
//       let result = await axios({
//         url: `${bUrl}/web-users/update-profile`,
//         method: "patch",
//         data: data,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       navigate("/admin/my-profile");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
//   let getAdminProfile = async () => {
//     try {
//       let result = await axios({
//         url: `${bUrl}/web-users/my-profile`,
//         method: "get",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       //   setProfile(result.data.data);
//       let data = result.data.data;
//       let formattedDate = new Date(data.dob).toISOString().split("T")[0];
//       setDob(formattedDate);
//       setFullName(data.fullName);
//       setGender(data.gender);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     getAdminProfile();
//   }, []);
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label htmlFor="fullName">FullName: </label>
//           <input
//             type="text"
//             placeholder="Eg: nitan"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => {
//               setFullName(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="dob">DOB: </label>
//           <input
//             type="date"
//             placeholder="Eg: 01/01/2000"
//             id="dob"
//             value={dob}
//             onChange={(e) => {
//               setDob(e.target.value);
//             }}
//           />
//         </div>

//         <div>
//           Gender: &nbsp;
//           {genderOption.map((item, i) => {
//             return (
//               <span key={i}>
//                 <label htmlFor={item.value}>{item.label}</label>
//                 <input
//                   type="radio"
//                   id={item.value}
//                   value={item.value}
//                   checked={gender === item.value}
//                   onChange={(e) => {
//                     setGender(e.target.value);
//                   }}
//                 />
//               </span>
//             );
//           })}
//         </div>

//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default AdminProfileUpdate;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import "../../css/crud.css";
import axios from "../../axiosConfig.js";


const AdminProfileUpdate = () => {
  let [fullName, setFullName] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("");
  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let genderOption = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,
      dob: dob,
      gender: gender,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/update-profile`,
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/admin/my-profile");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users/my-profile`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let data = result.data.data;
      let formattedDate = new Date(data.dob).toISOString().split("T")[0];
      setDob(formattedDate);
      setFullName(data.fullName);
      setGender(data.gender);
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div className="admin-profile-update-container">
      <form onSubmit={onSubmit} className="admin-profile-update-form">
        <div>
          <label htmlFor="fullName" className="admin-profile-update-label">
            FullName:{" "}
          </label>
          <input
            type="text"
            placeholder="Eg: nitan"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            className="admin-profile-update-input"
          />
        </div>
        <div>
          <label htmlFor="dob" className="admin-profile-update-label">
            DOB:{" "}
          </label>
          <input
            type="date"
            placeholder="Eg: 01/01/2000"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
            className="admin-profile-update-input"
          />
        </div>
        <div className="admin-profile-update-radio">
          Gender: &nbsp;
          {genderOption.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
        </div>
        <button type="submit" className="admin-profile-update-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default AdminProfileUpdate;
