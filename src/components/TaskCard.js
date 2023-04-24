import { useRouter } from "next/navigation";
import { useTasks } from "../context/TaskContext";
import toast from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      onClick={() => router.push(`/edit/${task.id}`)}
      className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2 ">
      <div className="flex justify-between">
        <h1>{task.title}</h1>
        <button
        className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm(
              "Are you sure you want to delete this task?"
            );
            if (accept) {
              deleteTask(task.id);
              toast.success("Task deleted");
            }
          }}
        >
          {" "}
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  );
};
