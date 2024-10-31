import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div>
      <div className="flex justify-around m-10">
        <div className="bg-red-700 w-1/6 h-20 py-2 px-6  rounded-xl ">
          <h2 className="text-2xl font-normal ">{data.taskCount.newTask}</h2>
          <h3 className="text-xl font-light ">New Task</h3>
        </div>
        <div className="bg-green-400 w-1/6 h-20 py-2 px-6 rounded-xl ">
          <h2 className="text-2xl font-normal ">{data.taskCount.completed}</h2>
          <h3 className="text-xl font-light ">Complete Task</h3>
        </div>
        <div className="bg-blue-400 w-1/6 h-20 py-2 px-6 rounded-xl ">
          <h2 className="text-2xl font-normal ">{data.taskCount.active}</h2>
          <h3 className="text-xl font-light ">Accept Task</h3>
        </div>
        <div className="bg-yellow-400 w-1/6 h-20 py-2 px-6  rounded-xl ">
          <h2 className="text-2xl font-normal ">{data.taskCount.failed}</h2>
          <h3 className="text-xl font-light ">Failed Task</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskNumber;
