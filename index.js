const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Running");
});

io.on("connection", (socket) => {
  //back-end gửi thông điệp "message" đến các client
  socket.emit("message", socket.id);

  //back-end nhận thông điệp "disconnect"
  socket.on("disconnect", () => {
    //back-end gửi thông điệp "callEnded" đến các client
    socket.broadcast.emit("callEnded");
  });

  //back-end nhận thông điệp callUser
  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    //back-end gửi thông điệp callUser đến user có id là "userToCall"
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
