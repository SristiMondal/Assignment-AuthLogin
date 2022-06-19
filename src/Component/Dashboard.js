import React from "react";
import Navbar from "./Navbar"

const Dashboard = (props) => {
  return (
    <div>
      <Navbar
        authenticated={props.authenticated}
        setAuthenticated={props.setAuthenticated}
      />
      <h1>Welcome to the DashBoard</h1>
    </div>
  );
};

export default Dashboard;
