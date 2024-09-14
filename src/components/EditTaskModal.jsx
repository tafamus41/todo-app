import React from "react";

const EditTaskModal = ({
  tasks,
  editTask,
  setEditTask,
  setTasks,
  handleEdit,
  taskId,
}) => {
  const handleSave = () => {
    const updatedTask = tasks.map((item, i) => (i === taskId ? editTask : item));
    setTasks(updatedTask)
    localStorage.setItem("list", JSON.stringify(updatedTask));
  };
  return (
    <div
      className="modal fade"
      id="editTaskModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="mb-3">
              <label htmlFor="title" className="form-label">
                Rearrange Your Task
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-info"
                  data-bs-dismiss="modal"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
