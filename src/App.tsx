import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/global/ProSideBar/SideBar";
import Messages from "./lists/Messages";
import Header from "./Components/ui/Header";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app  h-screen relative flex flex-row overflow-hidden">
          <SideBar />
          <main className="content flex flex-row border w-full">
            <Messages />
            <div className={`grow-[7] border    mx-1 my-2 rounded-xl`}>
              <Header title={"Main Content"} />
            </div>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
