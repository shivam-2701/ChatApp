import React from "react";
import Header from "../Components/ui/Header";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../theme";
const Messages = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="border grow-[3] mx-1 my-2 rounded-xl">
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"100%"}
        paddingRight={"1rem"}
        justifyContent={"space-between"}
      >
        <Header title="Messages" />
        <IconButton
          sx={{
            ":hover": {
              color: colors.greenAccent[500],
            },
            cursor: "pointer",
            alignSelf: "center",
          }}
        >
          <DriveFileRenameOutlineIcon fontSize={"large"} />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        bgcolor={colors.primary[400]}
        borderRadius={"3px"}
        className="mx-2 my-4 rounded-md "
      >
        <InputBase
          sx={{ ml: 2, flex: 1, paddingBlock: ".5rem" }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Messages;
