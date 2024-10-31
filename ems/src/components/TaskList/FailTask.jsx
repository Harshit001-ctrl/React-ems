import React from "react";

const FailTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-lg">
      <div className="flex justify-between px-3 py-2 items-center">
        <h2 className="bg-red-700 rounded-md text-lg p-2 ">{task.title}</h2>
        <h4>{task.taskDate}</h4>
      </div>
      <h2 className="mt-2 px-2 text-xl  font-semibold ">{task.category}</h2>
      <p className="mt-2 px-2 font-light ">{task.description}</p>
      <div className="flex justify-around p-4 ">
        <button className="bg-red-700 px-3 py-3 rounded-md">Failed</button>
      </div>
    </div>
  );
};

export default FailTask;
