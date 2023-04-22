"use client";

import { useState } from "react";
import { useTasks } from "../../context/TaskContext.js";
import { useRouter } from "next/navigation.js";
import { useEffect } from "react";

function Page({ params }) {
  console.log("params", params);

  const [task, setTasks] = useState({
    title: "",
    description: "",
  });
  const { tasks, createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTasks({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log("update");
    } else {
      createTask(task.title, task.description);
    }
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound)
        setTasks({
          title: taskFound.title,
          description: taskFound.description,
        });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Content"
        onChange={handleChange}
        value={task.description}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Page;
