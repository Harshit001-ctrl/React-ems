import React, { useState , useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  const [title, setTaskTitle] = useState("");
  const [date, setTaskDate] = useState("");
  const [assignTo, setTaskAssignTo] = useState("");
  const [category, setTaskCategory] = useState("");
  const [description, setTaskDescription] = useState("");

  
  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const task = userData
    
    task.forEach(function (e) {
      if (assignTo == e.firstName) {
        e.tasks.push(newTask);
        e.taskCount.newTask=e.taskCount.newTask+1
      }
    })
    setUserData(task)
    console.log(task);

    setTaskTitle("");
    setTaskDate("");
    setTaskAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg flex flex-col mt-4"
      >
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "black" }}
        >
          Create a New Task
        </h2>

        <div className="flex">
          <div className="w-2/3 pr-6">
            <div className="mb-6">
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                placeholder="Task Title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
            </div>

            <div className="mb-6">
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="assignTo"
                value={assignTo}
                onChange={(e) => {
                  setTaskAssignTo(e.target.value);
                }}
                placeholder="Assign To"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => {
                  setTaskCategory(e.target.value);
                }}
                placeholder="Category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
            </div>
          </div>

          <div className="w-1/3 pl-6">
            <div className="mb-6">
              <textarea
                name="description"
                value={description}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                placeholder="Task Description"
                className="w-full h-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
                rows={10}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
