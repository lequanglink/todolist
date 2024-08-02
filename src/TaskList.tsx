import React from "react";
import Task from "./Task";

interface TaskItem {
  id: number;
  title: string;
  time: string;
  completed: boolean;
  selected: boolean;
  editable: boolean;
  color?: string;
}

interface TaskListProps {
  tasks: TaskItem[];
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  handleSelectTask: (id: number) => void;
  handleEditTask: (id: number) => void;
  handleTaskChange: (id: number, value: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  handleCompleteTask, 
  handleDeleteTask, 
  handleSelectTask, 
  handleEditTask, 
  handleTaskChange 
}) => {
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