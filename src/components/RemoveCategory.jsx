import React from "react";

const RemoveCategory = ({ record, category, setCategory }) => {
  const handleDelete = (id) => {
    console.log(id)
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Are you want to delete?
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(record?.id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
            <label htmlFor="my-modal-6" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveCategory;
