import React from "react";

function Menu() {
  return (
    <>
      <div className="menu-area">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand ml-5" href="#">
            Freshyta
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline searchSubmit my-2 my-lg-0 ml-4">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for product or brand..."
                aria-label="Search"
              />
              <div className="submit">
                <input type="submit" />
              </div>
            </form>
            {/* <!-- form close here--> */}

            <ul className="navbar-nav mr-5 justify-content-end w-100">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop by Brands
                </a>
              </li>

              <li className="nav-item ml-3">
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#userModal"
                >
                  <i className="fas fa-user-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Menu;
