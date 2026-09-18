import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeDashboard from "./components/dashboard/EmployeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      alert("invalid");
    }
  };

  // handleLogin("admin@me.com", 123);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeDashboard />}
    </>
  );
};

export default App;
