import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/actions";

function AddTask() {
  const [description, setDescription] = useState("");
const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
if (!description.trim()) return;
dispatch(addTask(description.trim()));
setDescription("");
};

return (
<form className="add-task-form" onSubmit={handleSubmit}>
<input
type="text"
placeholder="Add a new task"
value={description}
onChange={(e) => setDescription(e.target.value)}
className="add-task-input"
/>
<button type="submit" className="btn btn-add">
Add Task
</button>
</form>
);
}

export default AddTask;
