import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid container style={{ justifyContent: "center" }}>
      {/*Own video */}
      {stream && (
        <Paper
          style={{
            padding: "10px",
            border: "2px solid black",
            margin: "10px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              autoPlay
              muted
              ref={myVideo}
              style={{
                width: "550px",
              }}
            ></video>
          </Grid>
        </Paper>
      )}

      {/*User video */}
      {callAccepted && !callEnded && (
        <Paper
          style={{
            padding: "10px",
            border: "2px solid black",
            margin: "10px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name}
            </Typography>
            <video
              playsInline
              autoPlay
              ref={userVideo}
              style={{
                width: "550px",
              }}
            ></video>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
