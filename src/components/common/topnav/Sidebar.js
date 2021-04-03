import React from "react";

function Sidebar() {
  return (
    <>
      <div id="sidebarMenu">
        <ul>
          <li>
            <a href="#">hellow world</a>
          </li>
          <li>
            <a href="#" className="feat-btn">
              features
              <span className="fas fa-caret-down first"></span>
            </a>
            <ul className="feat-show">
              <li>
                <a href="#">page1</a>
              </li>
              <li>
                <a href="#">page2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="serv-btn">
              services
              <span className="fas fa-caret-down second"></span>
            </a>
            <ul className="serv-show">
              <li>
                <a href="#">service1</a>
              </li>
              <li>
                <a href="#">service2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">Danger</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">Pilot web</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">Danger</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">Pilot web</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">Danger</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">Pilot web</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">Danger</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">Pilot web</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">Danger</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">Pilot web</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
