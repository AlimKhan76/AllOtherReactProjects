import React from "react";

export const Item = ({ todoItem, deleteItem, setEditItem }) => {
  return (
    <>
      <h1 className="text-center">Todo Items</h1>

      {todoItem.map((e, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body d-flex align-items-center">
              <h4>{e}</h4>
              <div className="ms-auto">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setEditItem(e, index);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteItem(e);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
