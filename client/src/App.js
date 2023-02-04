import React from "react";
import { AppBar, Typography } from "@mui/material";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

import background from "./assets/webBackground.jpg";
import "./App.css";

const App = () => {
  return (
    <div
      className="app_container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        color="inherit"
        style={{
          borderRadius: 15,
          margin: "30px 100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "600px",
          border: "2px solid black",
        }}
      >
        <Typography variant="h3" align="center">
          Video Call
        </Typography>
      </AppBar>

      {/* VideoPlayer */}
      <VideoPlayer />

      {/* Options */}
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
