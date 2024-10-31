import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login.jsx";
import EmpDashboard from "./components/Dashboard/EmpDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./Context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [logggeduser, setLoggedUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const logggedUser = localStorage.getItem("loggedin");
    if (logggedUser) {
      const userData = JSON.parse(logggedUser);
      setUser(userData.role);
      setLoggedUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@com" && password === "123") {
      setUser("admin");
      localStorage.setItem("logged", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser("employees");
        setLoggedUser(employee);
        localStorage.setItem(
          "logged",
          JSON.stringify({ role: "employees", data: employee })
        );
      }
    } else {
      alert("wrong");
    }
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employees" ? (
        <EmpDashboard changeUser={setUser} data={logggeduser} />
      ) : null}
    </div>
  );
};

export default App;
