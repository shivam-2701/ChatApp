import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

type Props = {
  icon: JSX.Element;
  title: string;
  isSelected?: boolean;
  isExpanded: boolean;
  className?: string;
};

const DashboardTile = ({
  icon,
  isSelected = false,
  title,
  isExpanded,
  className,
}: Props) => {
  return (
    <li
      className={`flex p-2 flex-row w-full items-center text-sm font-semibold gap-x-4 cursor-pointer hover:text-secondary ${
        isSelected ? "text-secondary" : ""
      } ${className}`}
    >
      <h2 className="flex flex-row w-full">
        <span className="text-lg mr-5">{icon}</span>
        {isExpanded && title}
      </h2>
    </li>
  );
};

export default DashboardTile;
