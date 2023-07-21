import React from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "../../theme";
const MessageItem = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="flex flex-row w-full border h-16 px-2">
      <div className="grow-[1]">image</div>
      <div className="grow-[3]">Name</div>
      <div className="grow-[1]">Info</div>
    </div>
  );
};

export default MessageItem;
