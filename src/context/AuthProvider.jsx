import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateEmployee = (updatedEmployee) => {
    setUserData((prevData) => {
      const updatedEmployees = prevData.employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      );

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      return { ...prevData, employees: updatedEmployees };
    });
  };

  return (
    <div>
      <authContext.Provider value={{ ...userData, updateEmployee }}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
