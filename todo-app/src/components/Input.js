import React from "react";

export const Input = ({
  inputData,
  handleInput,
  addItem,
  isEdit,
  editItem,
}) => {
  return (
    <div className="my-5 pt-5 container text-center ">
      <div className="input-group ">
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Todo Item"
          value={inputData}
          onChange={handleInput}
        />
      </div>
      {isEdit ? (
        <button className="my-3 btn btn-lg btn-success" onClick={editItem}>
          Edit Item
        </button>
      ) : (
        <button className="my-3 btn btn-lg btn-primary" onClick={addItem}>
          Add Item
        </button>
      )}
    </div>
  );
};
