import React from "react";

import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  menuClasses,
} from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

type ItemProps = {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const active = selected === title;
  return (
    <MenuItem
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      role="button"
      //   component={<Link to={to} />}
      rootStyles={{
        [`.${menuClasses.icon}`]: {
          color: active ? "#6870fa" : undefined,
        },
      }}
    >
      <Typography color={active ? "#6870fa" : undefined}>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userName, setUserName] = useState("Shivam Kr");
  const [userPositon, setUserPosition] = useState("VP Fancy Admin");
  const [profileSrc, setProfileSrc] = useState("../../assets/user.png");

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="h-full  w-min bg-background" id="sideBar-div">
      <ProSidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
        <Menu
          rootStyles={{
            [`.${menuClasses.icon}`]: {
              backgroundColor: "transparent",
            },
          }}
          menuItemStyles={{
            button: {
              ":hover": {
                backgroundColor: "transparent",
                color: colors.greenAccent[500],
              },
            },
            label: {
              ":hover": {
                backgroundColor: "transparent",
                color: colors.greenAccent[500],
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                    cursor: "pointer",
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Chatty
                </Typography>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{
                    ":hover": {
                      color: colors.greenAccent[500],
                    },

                    cursor: "pointer",
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Stories"
              to="/"
              icon={<GroupWorkIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Messages"
              to="/team"
              icon={<MessageIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Groups"
              to="/contacts"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/invoices"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
