"use client";

import { useTasks } from "../../context/TaskContext.js";
import { useRouter } from "next/navigation.js";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Page({ params }) {
  console.log("params", params);

  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data.title, data.description);
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Title" {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}
      <textarea
        placeholder="Content"
        {...register("description", { required: true })}
      />
      {errors.description && <span>This field is required</span>}
      <button type="submit">Save</button>
    </form>
  );
}

export default Page;
