# Redux Checkpoint

A To-Do List application built with React and Redux to manage the global application state.

## Features

Adding a new task with a description.
Editing an existing task's description.
Marking a task as done or not done.
Filtering the task list by all, done, or not done.

## Project Structure

src/actions/actionTypes.js defines the action type constants.
src/actions/actions.js contains the action creators addTask, editTask and toggleTask.
src/reducers/taskReducer.js is the reducer that manages the tasks array in the store.
src/store.js creates the Redux store.
src/components/AddTask.js is the form used to add a new task.
src/components/ListTask.js renders the list of tasks and the filter controls.
src/components/Task.js renders a single task with edit and toggle controls.
src/App.js is the main application component.

## How to Run Locally

Make sure you have Node.js and npm installed.
Clone this repository using git clone https://github.com/RamahB0/Redux-Checkpoint.git
Move into the project folder using cd Redux-Checkpoint
Install dependencies using npm install
Start the development server using npm start
Open http://localhost:3000 in your browser.

## State Management

Each task has an id, a description and an isDone flag.
The global state is a single array of tasks managed by the taskReducer.
Components use the useSelector and useDispatch hooks from react-redux to read the state and dispatch actions.
