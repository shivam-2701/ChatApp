import React, { useState } from "react";

import {
  Box,
  IconButton,
  Typography,
  menuItemClasses,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import DashboardTile from "./SideBarTile";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineHome, HiUserGroup } from "react-icons/hi";
// type Props = {
//   isExpanded: boolean;
//   setIsExpanded: () => void;
// };

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`bg-background  py-4 transition-all ease-in-out duration-500 flex flex-col gap-y-8 overflow-auto items-center scrollbar-thin mx-1 my-2 rounded-lg ${
        isExpanded ? "w-64 px-8" : "w-20 px-2"
      }`}
    >
      <div className="dashboard__header text-2xl font-normal flex flex-row items-center">
        <h3
          className={`capitalize overflow-hidden transition-all ease-in-out duration-500 ${
            isExpanded ? "mr-6" : "opacity-0 w-0"
          } `}
        >
          Chatty
        </h3>
        <HiOutlineMenuAlt3
          className="text-font-secondary hover:bg-hover-shadow p-2 box-content rounded-full transition-all ease-out cursor-pointer"
          size={"1.5rem"}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      <div className="main flex flex-col  w-full ">
        {/* {isExpanded && <UserInfo />} */}
        <DashboardTile
          icon={<HiOutlineHome />}
          isSelected
          title="Dashboard"
          isExpanded={isExpanded}
          className="mb-2 mt-4"
        />
        <ul className="">
          <DashboardTile
            icon={<HiUserGroup />}
            title="Manage Team"
            isExpanded={isExpanded}
          />
          <DashboardTile
            icon={<HiUserGroup />}
            title="Manage Team"
            isExpanded={isExpanded}
          />
          <DashboardTile
            icon={<HiUserGroup />}
            title="Manage Team"
            isExpanded={isExpanded}
          />
          <DashboardTile
            icon={<HiUserGroup />}
            title="Manage Team"
            isExpanded={isExpanded}
          />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
