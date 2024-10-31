import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-800 p-5 rounded w-4/5 px-10 mt-2">
        <div className="bg-red-600 py-2 mb-2 px-4 grid grid-cols-5 text-center gap-4 rounded-md">
          <h2>Employee Name</h2>
          <h3>Task</h3>
          <h4>Accept Task</h4>
          <h4>Complete Task</h4>
          <h4>Failed Task</h4>
        </div>

        <div className="overflow-auto rounded">
          {userData.map((e) => (
            <div
              className="bg-red-500 py-2 mb-2 px-4 grid grid-cols-5 text-center gap-4 rounded-md"
              key={e.id}
            >
                      <h2>{e.firstName}</h2>
              <h2>{e.taskCount.newTask}</h2> 
              <h2>{e.taskCount.active}</h2>
              <h2>{e.taskCount.completed}</h2>
              <h2>{e.taskCount.failed}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
