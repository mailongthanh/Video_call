import React, { useContext } from "react";
import { Button } from "@mui/material";

import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} đang gọi cho bạn: </h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Trả lời
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
