import React from "react";

export const Navbar = ({ menuList, displayCategorized }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container ">
          <a className="navbar-brand" href="/"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {menuList.map((e) => {
            return (
              <div key={e} className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                  <div className="nav-item">
                    <button
                      className="nav-link active"
                      aria-current="page"
                      onClick={() => {
                        displayCategorized(e);
                      }}
                    >
                      {e}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};
