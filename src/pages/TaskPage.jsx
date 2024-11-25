import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="bg-zinc-700 h-screen w-screen flex items-center flex-col p-6 max-md:px-3 max-md:w-full gap-4 [500px]">
      <div className="flex w-full justify-center relative">
        <button className="absolute left-0 top-0 bottom-0 text-zinc-100" onClick={() => navigate(-1)}>
          <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Task Details
        </h1>
      </div>
      <div className="bg-zinc-200 p-4 rounded-md w-full">
        <h2 className="text-xl text-zinc-800 font-bold">{title}</h2>
        <p className="text-zinc-700">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
