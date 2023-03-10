import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
  const {
    message,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <Container
      style={{
        width: "600px",
        margin: "35px 0",
        padding: 0,
      }}
    >
      <Paper
        elevation={10}
        style={{ padding: "10px 20px", border: "2px solid black" }}
      >
        <form
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            style={{
              width: "100%",
            }}
          >
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Typography gutterBottom variant="h6">
                Thông tin tài khoản
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              ></TextField>

              <CopyToClipboard text={message} style={{ marginTop: 20 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Sao chép ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: 20 }}>
              <Typography gutterBottom variant="h6">
                Tạo cuộc gọi
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              ></TextField>
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                  style={{ marginTop: 20 }}
                >
                  Tắt máy
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  style={{ marginTop: 20 }}
                >
                  Gọi
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
