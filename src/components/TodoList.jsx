import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ value, tasks, setTasks }) => {
  // console.log(value);
  console.log(tasks);
  return (
    <div>
      <p className="text-center ">
        <AiFillDelete
          type="button"
          size={22}
          className="text-danger cursor-pointer mx-3"
          // onClick={() => deleteKitap(id)}
        />
        <FaEdit
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          size={20}
          type="button"
          className="me-2 text-warning cursor-pointer"
          // onClick={() => setEditItem({title,ISBN,image,genre,id,author,publicationYear})}
        />
      </p>
    </div>
  );
};

export default TodoList;
