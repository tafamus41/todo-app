import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
  );
};

export default TodoForm;
