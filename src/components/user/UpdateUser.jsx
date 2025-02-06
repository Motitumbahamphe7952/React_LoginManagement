// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { bUrl } from "../../constant";
// import "../../css/crud.css";
// import { toast } from "react-toastify";

// const UpdateUser = () => {
//   let params = useParams();
//   let [user, setUser] = useState({});
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let [viewuser, setviewuser] = useState("CurrentUserData: ");

//   const getData = async () => {
//     try {
//       let result = await axios({
//         url: `${bUrl}/user/${params.id}`,
//         method: "get",
//       });

//       setUser(result.data.result);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let data = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     try {
//       let result = await axios({
//         url: `${bUrl}/user/${params.id}`,
//         method: "patch",
//         data: data,
//       });
//       setName("");
//       setEmail("");
//       setPassword("");

//       console.log(result.data.result);

//       getData();
//       setviewuser("UpdatedUserData: ");
//       toast.success(result.data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <br />
//       <div>
//        <h2> UpdateUser: </h2>
//         <br />
//         {viewuser}
//         <br />
//         <div
//           style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
//         >
//           <p>Name is {user.name}</p>
//           <p>Email is {user.email}</p>
//         </div>
//       </div>
//       <br />

//       <div>
//         <form className="create-user-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name: </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email: </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password: </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </div>
//           <div>
//             <button className="submit-btn" type="submit">
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateUser;

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { toast  } from "react-toastify";
import { bUrl } from "../../constant";
import FormUser from "./FormUser";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/user/${params.id}`,
        method: "get",
      });
      let data = result.data.result;
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      password: password,
    };

    //hit api

    try {
      let result = await axios({
        url: `${bUrl}/user/${params.id}`,
        method: "patch",
        data: data,
      });

      navigate(`/user/${params.id}`);
      // console.log(result.data.message);
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <FormUser
      name={name}
      email={email}
      password={password}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      buttonName="Update"
    ></FormUser>
  );
};

export default UpdateUser;
