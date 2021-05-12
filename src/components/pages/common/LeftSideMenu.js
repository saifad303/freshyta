import React from "react";
import { AiFillDashboard, AiFillHome } from "react-icons/ai";

function LeftSideMenu() {
  return (
    <div className="ml-2 mt-3 px-2 py-3 flex-shrink-0 bg-white flex-col items-start rounded-xl">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
        return (
          <a
            href=""
            className="flex items-center space-x-4 hover:border-red-500 border-2 border-gray-200 px-3 py-2 mb-3 rounded-xl hover:bg-red-500 group"
          >
            <AiFillHome size={25} className="group-hover:text-white" />
            <span className="font-medium group-hover:text-white">Home</span>
          </a>
        );
      })}
    </div>
  );
}

export default LeftSideMenu;
