import React from "react";

interface TaskProps {
  task: {
    id: number;
    title: string;
    time: string;
    completed: boolean;
    selected: boolean;
    editable: boolean;
    color?: string;
  };
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  handleSelectTask: (id: number) => void;
  handleEditTask: (id: number) => void;
  handleTaskChange: (id: number, value: string) => void;
}

const Task: React.FC<TaskProps> = ({ 
  task, 
  handleCompleteTask, 
  handleDeleteTask, 
  handleSelectTask, 
  handleEditTask, 
  handleTaskChange 
}) => {
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