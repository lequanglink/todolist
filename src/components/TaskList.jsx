import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleCompleteTask, handleDeleteTask, handleSelectTask, handleEditTask, handleTaskChange }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
          handleSelectTask={handleSelectTask}
          handleEditTask={handleEditTask}
          handleTaskChange={handleTaskChange}
        />
      ))}
    </div>
  );
}

export default TaskList;
