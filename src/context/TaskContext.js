"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export const TaskProvider = ({ children }) => {
    const tasks = [{
	id: 1,
	title: 'my first task',
	descripton: 'some task'
    
    },const tasks = [{
	id: 1,
	title: 'my first task',
	descripton: 'some task'
    
    },
    ]
    ];

  return (
    <TaskContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
