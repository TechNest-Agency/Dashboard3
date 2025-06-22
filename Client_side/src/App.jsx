import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Components/Pages/Login";


const App = () => {
  return (
    <div>
      {/* <Outlet /> */}
      <Login/>
    </div>
  );
};

export default App;
