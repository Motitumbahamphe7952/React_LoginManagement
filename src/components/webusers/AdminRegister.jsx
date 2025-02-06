
import React, { useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import "../../css/crud.css";
import axios from "../../axiosConfig.js";



const AdminRegister = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("");

  let genderOption = [
    {
      value: "male", //item.value
      label: "Male", //item.label
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
      email: email,
      password: password,
      dob: dob,
      gender: gender,
    };

    data = {
      ...data,
      role: "admin",
    };
    // console.log(data);

    try {
      let result = await axios({
        url: `${bUrl}/web-users`,
        method: "post",
        data: data,
      });
      toast.success(
        "A link has been sent to your email address. please click the given link to verify your account"
      );

      setFullName("");
      setEmail("");
      setPassword("");
      setDob("");
      setGender("");
    } catch (error) {
      // toast.error(error.response.data.message);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <div>
      <form className="create-user-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">FullName: </label>
          <input
            type="text"
            placeholder="Eg: nikhil"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
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
            type="text"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB: </label>
          <input
            type="date"
            placeholder="Eg: 01/01/2000"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
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

        <button className="submit-btn" type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default AdminRegister;
