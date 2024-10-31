import React from "react";
import Header from "../EmpHeader/Header.jsx";
import TaskListNumber from "../EmpHeader/TaskListNumber.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const EmpLogin = (props ) => {
  return (
    <div className="">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmpLogin;
