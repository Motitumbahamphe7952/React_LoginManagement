import React, { useContext } from "react";
// import { Context1, Context2 } from "../../App";

const GrandChild = () => {
  let value = useContext(Context1);
  let value1 = useContext(Context2);
  return (
    <div>
      GrandChild <br />
      Name is {value.name},<br />
      Age is {value.age} <br />
      Address is {value1.address} <br />
      <button
        onClick={() => {
          value.setname("nitan");
          value.setage(value.age + 1);
          value1.setaddress("gagalphedi")
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default GrandChild;
