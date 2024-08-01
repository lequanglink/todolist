import React from "react";

function Task({ task, handleCompleteTask, handleDeleteTask, handleSelectTask, handleEditTask, handleTaskChange }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.selected}
        onChange={() => handleSelectTask(task.id)}
      />
      <span className="task-color" style={{ backgroundColor: task.color }} />
      {task.editable ? (
        <input
          type="text"
          value={task.title}
          onChange={(e) => handleTaskChange(task.id, e.target.value)}
        />
      ) : (
        <p>{task.title}</p>
      )}
      <div className="task-time">
        <p>{task.time}</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCompleteTask(task.id)}
          disabled={task.selected}
        />
        <button onClick={() => handleEditTask(task.id)} disabled={task.selected}>
          {task.editable ? "Save" : "Edit"}
        </button>
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
