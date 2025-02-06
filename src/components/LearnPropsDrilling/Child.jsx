import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div>
      Child
      <GrandChild></GrandChild>
    </div>
  );
};

export default Child;
