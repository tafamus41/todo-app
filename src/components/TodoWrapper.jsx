import React from "react";
import TodoForm from "./TodoForm";

const TodoWrapper = () => {
  return (
    <div className="todoDiv">
      <div className="TodoWrapper">
        <h1>Get Things Done!</h1>
        <TodoForm />
      </div>
    </div>
  );
};

export default TodoWrapper;
