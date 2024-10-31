import React from "react";
import AcceptTask from "./AcceptTask.jsx";
import CompleteTask from "./CompleteTask.jsx";
import FailTask from "./FailTask.jsx";
import NewTask from "./NewTask.jsx";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-64 w-11/12 flex items-center overflow-x-auto gap-5  m-20 mx-auto "
    >
      {data.tasks.map((e, idx) => {
        // console.log(e);
        
        if (e.newTask) {
          return <NewTask key={idx} task={e} />;
        }
        if (e.active) {
          return <AcceptTask key={idx} task={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={idx} task={e} />;
        }
        if (e.failed) {
          return <FailTask key={idx} task={e} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
