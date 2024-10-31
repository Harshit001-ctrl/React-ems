const employees = [
  {
    id: 1,
    firstName: "Ravi", // Indian first name
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1, // Number of active tasks
      newTask: 2, // Number of new tasks
      completed: 1, // Number of completed tasks
      failed: 0, // Number of failed tasks
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "meeting of the members to give all detaails",
        taskDate: "2024-10-01",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        taskDescription: "discuss project of the employee tiday very urgent",
        taskDate: "2024-09-15",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 3",
        description: "Description for Task 3",
        taskDate: "2024-10-05",
        category: "Testing",
        title: "app",
      },
    ],
  },
  {
    id: 2,
    firstName: "Anjali", // Indian first name
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for Task 1",
        taskDate: "2024-10-02",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Description for Task 2",
        category: "Development",
        taskDate: "2024-09-20",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 3",
        description: "Description for Task 3",
        taskDate: "2024-10-07",
        category: "Documentation",
        taskTitle: "website",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya", // Indian first name
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1",
        description: "Description for Task 1",
        taskDate: "2024-09-10",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Description for Task 2",
        taskDate: "2024-10-04",
        category: "Design",
        taskTitle: "make app",
      },
    ],
  },
  {
    id: 4,
    firstName: "Rajesh", // Indian first name
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 1",
        description: "Description for Task 1",
        taskDate: "2024-09-15",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 2",
        description: "Description for Task 2",
        taskDate: "2024-10-01",
        category: "Research",
        taskTitle: "viedos",
      },
    ],
  },
  {
    id: 5,
    firstName: "Kavita", // Indian first name
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for Task 1",
        taskDate: "2024-10-02",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 2",
        description: "Description for Task 2",
        taskDate: "2024-10-05",
        category: "Design",
        taskTitle: "fix bugs",
      },
    ],
  },
];
const admin = [{ id: 1, email: "admin@example.com", password: "123" }];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
setLocalStorage();

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

getLocalStorage();
