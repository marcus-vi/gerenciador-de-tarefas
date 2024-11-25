import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task({ tasks, onTaskClick, taskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className="space-y-4 w-[500px] bg-zinc-100 p-6 rounded-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={`bg-zinc-400 text-white w-full p-2 rounded-md text-left ${
              tasks.completed && `line-through`
            }`}
          >
            {tasks.title}
          </button>
          <button onClick={() => onSeeDetailsClick(tasks)} className="bg-zinc-400 rounded-md text-white p-1">
            <ChevronRightIcon />
          </button>
          <button className="bg-zinc-400 rounded-md text-white p-1">
            <TrashIcon onClick={() => taskDelete(tasks.id)} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
