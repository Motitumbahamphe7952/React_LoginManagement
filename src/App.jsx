// import { createContext, useState } from "react";
// import Parent from "./components/LearnPropsDrilling/Parent";

// // export let Context1 = createContext();
// // export let Context2 = createContext();
// function App() {
//   // let [name, setname] = useState("nikhil");
//   // let [age, setage] = useState(21);
//   // let [address, setaddress] = useState("kathmandu");
//   return (
//     <>
//       {/* <Context2.Provider value={{ address:address, setaddress:setaddress }}>
//         <Context1.Provider
//           value={{ name: name, age: age, setname: setname, setage: setage }}
//         >
//           <Parent></Parent>
//         </Context1.Provider>
//       </Context2.Provider> */}
//
//     </>
//   );
// }

// export default App;



import { createContext, useState } from "react";
import ReactRouter from "./components/Route/ReactRouter";
export let GlobalVariableContext = createContext();
function App() {
  // let token = localStorage.getItem("token");
  let [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <GlobalVariableContext.Provider
        value={{ token: token, setToken: setToken }}
      >
        <ReactRouter></ReactRouter>
      </GlobalVariableContext.Provider>
    </>
  );
}

export default App;
