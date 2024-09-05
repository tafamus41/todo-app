import React, { useState } from "react";

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
        <input
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name="todo"
          id="todo"
          required
          spellCheck="false"
        />
        <label> Enter your tasks</label>
        <button type="submit" className="todo-btn">
          Add New Task
        </button>
      </form>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoForm;
