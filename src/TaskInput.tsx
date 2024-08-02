import React from "react";

interface TaskInputProps {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  newTaskTime: string;
  setNewTaskTime: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ 
  newTask, 
  setNewTask, 
  newTaskTime, 
  setNewTaskTime, 
  handleAddTask 
}) => {
  return (
    <div className="task-input">
      <span className="task-color" style={{ backgroundColor: "pink" }} />
      <span className="task-color" style={{ backgroundColor: "cyan" }} />
      <span className="task-color" style={{ backgroundColor: "gold" }} />
      <input
        type="text"
        placeholder="What is your next task?"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        type="time"
        value={newTaskTime}
        onChange={(e) => setNewTaskTime(e.target.value)}
      />
      <button className="add-task" onClick={handleAddTask} disabled={!newTask || !newTaskTime}>+</button>
    </div>
  );
}

export default TaskInput;