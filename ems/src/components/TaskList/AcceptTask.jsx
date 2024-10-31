import React from "react";

const AcceptTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-lg">
      <div className="flex justify-between px-3 py-2 items-center">
        <h2 className="bg-red-700 rounded-md text-lg p-2 ">{task.title}</h2>
        <h4>{task.taskDate}</h4>
      </div>
      <h2 className="mt-2 px-2 text-xl  font-semibold ">{task.category}</h2>
      <p className="mt-2 px-2 font-light ">{task.Description}</p>
      <div className="flex justify-around p-4 ">
        <button className="bg-green-400 px-3 py-3 rounded-md">Complete</button>
      </div>
    </div>
  );
};

export default AcceptTask;
