// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { bUrl } from "../../constant";
// const CreateUser = () => {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let data = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     //hit api
//     // url,method,data

//     try {
//       let result = await axios({
//         url: `${bUrl}/user`,
//         method: "post",
//         data: data,
//       });
//       setName("");
//       setEmail("");
//       setPassword("");

//       // console.log(result.data.message);
//       toast.success(result.data.message);
//     } catch (error) {
//       // console.log(error);
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//         </div>
//       </div>
//       <div>
//         <button type="submit">Register</button>
//       </div>
//     </form>
//   );
// };
// export default CreateUser;

import axios from "axios";
import React, { useState } from "react";

import { bUrl } from "../../constant";
import FormUser from "./FormUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

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
        url: `${bUrl}/user`,
        method: "post",
        data: data,
      });
      setName("");
      setEmail("");
      setPassword("");
;

      navigate(`/user/${result.data.result._id}`);
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
      buttonName="Register"
    ></FormUser>
  );
};

export default CreateUser;
