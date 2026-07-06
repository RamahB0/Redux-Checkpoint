import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../actions/actions";

function Task({ task }) {
const dispatch = useDispatch();
const [isEditing, setIsEditing] = useState(false);
const [description, setDescription] = useState(task.description);

const handleToggle = () => {
dispatch(toggleTask(task.id));
};

const handleEditSubmit = (e) => {
e.preventDefault();
if (!description.trim()) return;
dispatch(editTask(task.id, description.trim()));
setIsEditing(false);
};

return (
<div className={"task-item " + (task.isDone ? "task-done" : "task-pending")}>
<input type="checkbox" checked={task.isDone} onChange={handleToggle} />
{isEditing ? (
<form className="edit-form" onSubmit={handleEditSubmit}>
<input
type="text"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
<button type="submit" className="btn btn-save">
Save
</button>
<button
type="button"
className="btn btn-cancel"
onClick={() => setIsEditing(false)}
>
Cancel
</button>
</form>
) : (
<>
<span className="task-description">{task.description}</span>
<button
className="btn btn-edit"
onClick={() => setIsEditing(true)}
disabled={task.isDone}
>
Edit
</button>
</>
)}
</div>
);
}

export default Task;
