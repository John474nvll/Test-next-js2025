"use client";
import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "my first task",
      descripton: "some task",
    },
    {
      id: 2,
      title: "my second task",
      descripton: "some task second",
    },
    {
      id: 3,
      title: "my third task",
      descripton: "some task third",
    },
  ]);
  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: 10,
      },
    ]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
