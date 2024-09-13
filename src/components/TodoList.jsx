import React, {useState} from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditTaskModal from "./EditTaskModal";

const TodoList = ({setTasks,tasks,handleDelete }) => {
  const[editTask,setEditTask]=useState("")
    return (
    
    <div>
      {tasks.map((item, i) => (
        <p
          className="whattodo text-white border border-2 border-white p-2"
          key={i}
        >
          {item}
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
            onClick={() => setEditTask(item)}
          />
        </p>
      ))}
      <EditTaskModal editTask={editTask} setEditTask={setEditTask} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default TodoList;
