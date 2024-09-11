import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setTasks([...tasks, value]); 
      setValue(""); 
    }
  };
  return (
    <>
      <form className="input-field" onSubmit={handleSubmit}>
        <input className="todo-input" value={value} onChange={(e) => setValue(e.target.value)}
          type="text" name="todo" id="todo" required spellCheck="false" />
        <label> Enter your tasks</label>
        <button type="submit" className="todo-btn"> Add New Task </button>
      </form>
      <TodoList value={value} tasks={tasks}/>
    </>
  );
};

export default TodoForm;
