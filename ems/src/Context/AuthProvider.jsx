import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utlis/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  const data = getLocalStorage();
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  )
};

export default AuthProvider;
