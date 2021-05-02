import React from "react";

function Topnav({ sidebarHandler }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginBottom: 0 }}
      >
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-info"
            onClick={sidebarHandler}
          >
            <i className="fas fa-align-left"></i>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topnav;
