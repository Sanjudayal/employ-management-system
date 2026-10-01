import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeDashboard from "./components/dashboard/EmployeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { authContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  const authData = useContext(authContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser && authData) {
      if (!loggedInUser || !authData) return;

      const userData = JSON.parse(loggedInUser);
      // setUser(userData.role);

      if (userData.role === "employee") {
        setLoggedInUserId(userData.employeeId);
      }

      if (userData.role === "admin") {
        setUser("admin");
      }

      // setLoggedInUserData(userData.data);
    }
  }, [authData]);

  useEffect(() => {
    if (!authData || !loggedInUserId) return;

    const employee = authData.employees.find(
      (employee) => employee.id === loggedInUserId,
    );

    if (employee) {
      setLoggedInUserData(employee);
      setUser("employee");
    }
  }, [authData, loggedInUserId]);

  const handleLogin = (email, password) => {
    if (
      authData.admin.find((e) => email == e.email && password == e.password)
    ) {
      setUser("admin");
      setLoggedInUserId(null);
      setLoggedInUserData(null);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password,
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserId(employee.id);
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            employeeId: employee.id,
          }),
        );
      }
    } else {
      alert("invalid");
    }
  };

  const handleLogOut = () => {
    setUser(null);
    setLoggedInUserId(null);
    setLoggedInUserData(null);

    localStorage.removeItem("loggedInUser");
  };


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard handleLogOut={handleLogOut} />
      )}
      {user === "employee" && (
        <EmployeDashboard handleLogOut={handleLogOut} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
