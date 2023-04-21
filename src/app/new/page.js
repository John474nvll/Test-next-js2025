"use client";

import { useState } from "react";
import { useTasks } from "../../context/TaskContext.js";
import { useRouter } from "next/navigation.js";

function Page() {
  const [tasks, setTasks] = useState();
  const { createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTasks({ ...tasks, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(tasks.title, tasks.description);
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Content"
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Page;
