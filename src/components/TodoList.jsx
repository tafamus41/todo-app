import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditTaskModal from "./EditTaskModal";

const TodoList = ({ setTasks, tasks, handleDelete }) => {
  const [editTask, setEditTask] = useState("");
  const [taskId,setEditId]=useState(null);

  const handleEdit = (item, i) => {
    setEditTask(item)
    setEditId(i)
  };

  return (
    <div>
      {tasks.map((item, i) => (
        <div className="border border-2 border-white p-2 my-4 todoList" key={i}>
          <p className="text-white my-2 " key={i}>
            {item}
          </p>
          <p>
            <AiFillDelete
              type="button"
              size={22}
              className="text-danger cursor-pointer mx-3"
              onClick={() => handleDelete(i)}
            />
            <FaEdit
              data-bs-toggle="modal"
              data-bs-target="#editTaskModal"
              size={20}
              type="button"
              className="me-2 text-danger cursor-pointer"
              onClick={() => handleEdit(item, i)}
            />
          </p>
        </div>
      ))}
      <EditTaskModal
        editTask={editTask}
        setEditTask={setEditTask}
        tasks={tasks}
        setTasks={setTasks}
        taskId={taskId}
      />
    </div>
  );
};

export default TodoList;
