const app = require("./app");
const { Server } = require("socket.io");
const { createServer } = require("http");
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const messages = [
  {
    message: "hello mba yolanda",
    user: "system",
    createdAt: new Date(),
  },
];

const userSocketMap = new Map();

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  const userId = socket.handshake.query.userId;
  userSocketMap.set(userId, socket.id);

  socket.on("ping", (message) => {
    console.log({ message }, "dari client");
  });

  socket.on("hello", (message) => {
    console.log({ message }, "dari pong");
    socket.emit("hello-from-server", "from server " + message);
  });

  socket.on("messages", (callback) => {
    callback(messages);
  });

  socket.on("message:create", async ({ message, user }) => {
    const newMessage = {
      message,
      user,
      createdAt: new Date(),
    };

    messages.push(newMessage);
    io.emit("messages:broadcast", messages);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
    userSocketMap.delete(userId);
  });
});

module.exports = io;
