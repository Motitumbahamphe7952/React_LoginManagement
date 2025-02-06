import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bUrl } from "../../constant";
import UserDetailsUI from "./UserDetailsUI";

const UserDetails = () => {
  let params = useParams();
  let [user, setUser] = useState({});

  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/user/${params.id}`,
        method: "get",
      });

      setUser(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(user);

  return (
    <UserDetailsUI
    user={user}
    ></UserDetailsUI>
  );
};

export default UserDetails;
