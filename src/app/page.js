"use client";
import { useTasks } from "../context/TaskContext.js";
import { TaskCard } from "@/components/TaskCard.js";

function Page() {
  const { tasks } = useTasks();
  console.log(tasks)

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default Page;
