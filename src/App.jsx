import React from "react";
import Login from "./components/auth/Login";
import EmployeDashboard from "./components/dashboard/EmployeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeDashboard /> */}
      <AdminDashboard />
    </>
  );
};

export default App;
