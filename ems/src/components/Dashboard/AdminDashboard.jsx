import React from 'react'
import Header from "../EmpHeader/Header.jsx";
import CreateTask from '../EmpHeader/CreateTask.jsx';
import AllTask from '../EmpHeader/AllTask.jsx';

const AdminLogin = (props) => {
  return (
    <div>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminLogin
