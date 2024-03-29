import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ sidebarActive }) {
  return (
    <>
      <nav id="sidebar" className={sidebarActive ? "active" : ""}>
        <div className="sidebar-header">
          <h3>fresyta</h3>
          <strong>F</strong>
        </div>

        <ul className="list-unstyled components">
          <li>
            <NavLink to="/admin">
              <i className="fas fa-tachometer-alt"></i>
              Dashboard
            </NavLink>
            <NavLink to="/admin/products">
              <i className="fas fa-carrot"></i>
              Products
            </NavLink>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fas fa-copy"></i>
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-image"></i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question"></i>
              FAQ
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-paper-plane"></i>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
