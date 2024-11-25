import { useState } from "react";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });

  return (
    <div className="space-y-4 bg-zinc-100 w-[500px] p-6 rounded-md shadow flex flex-col">
      <input
        type="text"
        name=""
        id=""
        placeholder="Digite o titulo da tarefa"
        className="border border-zinc-300 outline-zinc-500 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Digite sua tarefa aqui"
        className="border border-zinc-300 outline-zinc-500 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (title.trim() && description.trim()) {
          onAddTask(title, description);
          setDescription("");
          setTitle("");
          }
          else {
            alert("Preencha os campos para adicionar a tarefa");
          }
        }}
        className="bg-zinc-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
