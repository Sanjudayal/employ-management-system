import React, { useEffect } from "react";
import Login from "./components/auth/Login";
import EmployeDashboard from "./components/dashboard/EmployeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      <Login />
      {/* <EmployeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
