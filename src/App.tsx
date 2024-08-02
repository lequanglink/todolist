import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import './App.css';

interface Task {
  id: number;
  title: string;
  time: string;
  completed: boolean;
  selected: boolean;
  editable: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Work out", time: "8:00", completed: true, selected: false, editable: false },
    { id: 2, title: "Design team meeting", time: "2:30", completed: false, selected: false, editable: false },
    { id: 3, title: "Hand off the project", time: "7:00", completed: false, selected: false, editable: false },
    { id: 4, title: "Read 5 pages of 'sprint'", time: "10:30", completed: false, selected: false, editable: false },
  ]);

  const [newTask, setNewTask] = useState<string>("");
  const [newTaskTime, setNewTaskTime] = useState<string>("");

  const handleCompleteTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask && newTaskTime) {
      const newTaskItem: Task = {
        id: tasks.length + 1,
        title: newTask,
        time: newTaskTime,
        completed: false,
        selected: false,
        editable: false,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
      setNewTaskTime("");
    }
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSelectTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, selected: !task.selected, editable: task.selected ? task.editable : false };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, editable: !task.editable };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskChange = (id: number, newTitle: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <h1>Today's main focus</h1>
        <h2>Design team meeting</h2>
        <TaskInput
          newTask={newTask}
          setNewTask={setNewTask}
          newTaskTime={newTaskTime}
          setNewTaskTime={setNewTaskTime}
          handleAddTask={handleAddTask}
        />
        <div className="task-list-container">
          <TaskList
            tasks={tasks}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
            handleSelectTask={handleSelectTask}
            handleEditTask={handleEditTask}
            handleTaskChange={handleTaskChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;