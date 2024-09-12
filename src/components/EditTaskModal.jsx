import React from "react";

const EditTaskModal = () => {
  
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
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Rearrange Your Task
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                // value={}
                //   onChange={(e) =>
                //     setEditItem(e.target.value)
                //   }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-info"
              data-bs-dismiss="modal"
              
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
