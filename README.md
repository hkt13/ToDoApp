<h1 align="center"><b>To Do App</b></h1>

<h2>ToDoApp is a simple task management application built to help users organize their daily tasks and stay productive.</h2>

<h3>Features</h3>
<ul>
  <li><b>Add Tasks:</b> Users can create new tasks by typing them into the input field and clicking the "Add" button</li>
   <li><b>Edit Tasks:</b> Tasks can be edited after creation, allowing users to update task details as needed.</li>
   <li><b>Delete Tasks:</b> Unwanted tasks can be deleted from the list, removing them from the user's task list.</li>
     <li><b>Mark Tasks as Complete:</b> Users can mark tasks as complete by checking the checkbox next to each task. Completed tasks are visually distinguished with a strikethrough.</li>
    <li><b>Remaining Tasks Counter:</b> The application displays the number of remaining tasks to be completed, providing users with a quick overview of their task list.</li>
</ul>
 .
<h3>Installation</h3>
As the application is built with Vite, you can follow these steps to run it locally:

<li>Clone the repository to your local machine.</li>
<li>Navigate to the project directory in your terminal.</li>
<li>Run npm install to install the dependencies.</li>
<li>Run npm run dev to start the development server.</li>
<li>Open your web browser and go to http://localhost:3000 to view the application.</li>

<h3>Usage</h3>
<li>Enter the task you want to add into the input field labeled "Task to be done."</li>
<li>Click the "Add" button to add the task to your list.</li>
<li><b>To mark a task as complete</b>, click the checkbox next to the task. Completed tasks will be visually marked with a strikethrough.</li>
<li><b>To edit a task</b>, click the "Edit" button next to the task and make the desired changes.</li>
<li><b>To delete a task</b>, click the "Delete" button next to the task.</li>

<h3>Deployment</h3>
The application is deployed on Vercel and can be accessed here <a href="https://to-do-app-one-ecru.vercel.app/"target="_blank">Live Demo</a>.

<h3>Technologies Used</h3>
<li>HTML</li>
<li>Tailwind CSS</li>
<li>React.js</li>
<li>Redux Toolkit</li>

<h3>File Structure</h3>
ToDoApp/<br/>
│<br/>
├── src/<br/>
│   ├── components/<br/>
│   │   ├── Header.jsx<br/>
│   │   ├── Body.jsx<br/>
│   │   └── Todo.jsx<br/>
│   ├── store/<br/>
│   │   └── store.js<br/>
│   │   └── TaskSlice.js<br/>
│   ├── App.js<br/>
│   └── index.js<br/>
├── node_modules/<br/>
├── package.json<br/>
└── README.md<br/>

