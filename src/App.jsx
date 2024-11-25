import { useEffect, useState } from "react";
import Task from "./components/task";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function EffectTask() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const data = await response.json();
      console.log(data);
      setTasks(data)
    }
    // EffectTask();

  }, []);

  function onTaskClick(taskid) {
    const newTask = tasks.map((task) => {
      if (task.id === taskid) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTask);
  }

  function taskDelete(taskid) {
    const newTasks = tasks.filter((task) => task.id !== taskid);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      completed: false,
      description,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="bg-zinc-700 h-screen w-screen flex items-center flex-col p-6 gap-5">
      <div className="">
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Task List
        </h1>
      </div>
      <AddTask onAddTask={onAddTask} />
      <Task tasks={tasks} onTaskClick={onTaskClick} taskDelete={taskDelete} />
    </div>
  );
}

export default App;
