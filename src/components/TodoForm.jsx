import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("list")) || []
);
localStorage.setItem("list", JSON.stringify(tasks));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setTasks([...tasks, value]); 
      // localStorage.setItem("list", JSON.stringify(tasks));
      setValue(""); 
    }
  };
  const handleDelete = (i) => {
    const filteredTasks=tasks.filter((item,index)=>(index!==i))
    setTasks(filteredTasks)
    localStorage.setItem("list", JSON.stringify(filteredTasks));
  };


  return (
    <>
      <form className="input-field" onSubmit={handleSubmit}>
        <input className="todo-input" value={value} onChange={(e) => setValue(e.target.value)}
          type="text" name="todo" id="todo" required spellCheck="false" />
        <label> Enter your tasks</label>
        <button type="submit" className="todo-btn"> Add New Task </button>
      </form>
      <TodoList tasks={tasks} setTasks={setTasks} handleDelete={handleDelete}/>
    </>
  );
};

export default TodoForm;
