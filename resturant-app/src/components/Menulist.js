import React from "react";

export const Menulist = ({ menuData }) => {
  return (
    <div className="row mt-5">
      {menuData.map((e) => {
        return (
          <div className="col-md-4" key={e.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={e.image} className="card-img-top" alt={e.name} />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <div>
                  <p className="card-text"> {e.category}</p>
                  <p className="text-right">
                    <b> Price of the item is </b>
                    {e.price}
                  </p>
                </div>
                <a href="/" className="btn btn-primary">
                  {e.description}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
