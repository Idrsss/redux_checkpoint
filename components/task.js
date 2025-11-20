import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/todoSlice";
import { useState } from "react";

function Task({ task }) {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />

      {editing ? (
        <>
          <input 
          className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={() => {
            dispatch(editTask({ id: task.id, newText }));
            setEditing(false);
          }}>
            Save
          </button>
        </>
      ) : (
        <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>
          {task.description}
        </span>
      )}

      <button onClick={() => setEditing(!editing)}>
        {editing ? "Cancel" : "Edit"}
      </button>
    </div>
  );
}

export default Task;
