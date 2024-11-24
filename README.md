📌 Project Overview
This Employee Management System is designed to help organizations efficiently manage their employees and tasks. The system provides an intuitive interface to:

1->Add new employees.

   🗂️ Data Management
Employee Data: Employees are created and stored in JSON format, making managing and exchanging data easy.
![image alt](https://github.com/Harshit001-ctrl/React-ems/blob/64f7592b78f2535b9201b14a5e225e0c55764a23/Add%20emp.png)

Login Persistence: When an employee logs in, their session data is securely stored in the browser's local storage. This ensures user-specific functionality without the need for constant re-authentication during a session You can see the employee in blue hover in the local storage.
![image alt](https://github.com/Harshit001-ctrl/React-ems/blob/09afee015c6b24c0adf353a97285f7c3f8dd8714/local%20storage.png).

2-> Track task statuses across four stages: New, Accepted, Completed, and Failed.

   ⚙️ Features

New -> Tasks in the New stage are freshly assigned but have not yet been acknowledged by the employee.
These tasks are essentially in the "pending acceptance" phase.
![image](https://github.com/Harshit001-ctrl/React-ems/blob/2ac8d20ddf3b33f9fb25db79e8971701b17168ee/New%20Task.png)

Accepted -> Once an employee acknowledges a task, it moves to the Accepted stage.
This indicates that the employee has agreed to work on the task but it is still in progress.
![image](https://github.com/Harshit001-ctrl/React-ems/blob/2ac8d20ddf3b33f9fb25db79e8971701b17168ee/Accept%20Task.png)

Completed -> Tasks move to the Completed stage when the employee finishes the work and marks it as done.
This status shows that the task has been successfully executed.
![image](https://github.com/Harshit001-ctrl/React-ems/blob/2ac8d20ddf3b33f9fb25db79e8971701b17168ee/Complete%20Task'.png)

Failed ->  If a task cannot be completed for any reason, it is moved to the Failed stage.
This status highlights tasks that require further attention, resolution, or reassignment.
![image alt](https://github.com/Harshit001-ctrl/React-ems/blob/2ac8d20ddf3b33f9fb25db79e8971701b17168ee/Fail%20Task.png).

  🛠️ Technologies Used
Frontend
HTML5 & CSS3: For structuring and styling the application.
JavaScript: For interactivity and logic implementation.
Bootstrap: For responsive and modern UI design.
React.js: For creating dynamic and reusable components.

Tools
Postman: For testing REST API endpoints.
GitHub: For version control and collaboration.

Steps to Run
-> Clone the repository: using this https://github.com/Harshit001-ctrl/React-ems.git
->  Set up the frontend: npm install.
-> Start the React development server: npm run dev.
-> Access the application: Open your browser and navigate to http://localhost:5173 

   📋 Components Used
-> React Components
EmployeeCard: Displays individual employee details.
TaskCard: Displays task information and its current status.
StatusBoard: Displays tasks grouped by status (New, Accepted, Completed, Failed).
AddEmployeeForm: Form to add new employees.
AddTaskForm: Form to assign tasks.

  🌟 Future Enhancements
Add user authentication for secure access.
Implement advanced filtering options for tasks and employees.
Integrate real-time notifications for task updates.
Add a reporting module for insights into employee and task performance.

  📧 Contact
For any questions or suggestions, feel free to reach out:
Email: harshitrao84@gmail.com

This README provides all the necessary details for understanding and using your Employee Management System. You can customize the placeholders (e.g., your username) with your actual information.
