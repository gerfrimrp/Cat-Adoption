// socket.js

const app = require("./app");
const { Server } = require("socket.io");
const { createServer } = require("http");
const { ChatMessage } = require("./models");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const messages = [
  {
    message: "hello",
    user: "system",
    createdAt: new Date(),
  },
];

// const userSocketMap = new Map();

// io.use(authSocket);

// io.on("connection", (socket) => {
//   const UserId = socket.id;
//   console.log(`${UserId} connected`);

//   // userSocketMap.set(userId, socket.id);

//   // socket.on("ping", (message) => {
//   //   console.log({ message }, "dari client");
//   // });

//   socket.on("join-chat", (AuthorId) => {
//     socket.join("test");
//     console.log("joined a chat " + AuthorId);
//   });
//   socket.on("leave-chat", (chat) => {
//     socket.leave(chat);
//     console.log("leave chat " + chat);
//   });

//   socket.on("message:create", async ({ message, chat }) => {
//     console.log({ message });
//     io.to(chat).emit("message: delivered", { message });
//     // try {
//     //   await ChatMessage.create({
//     //     message,
//     //     chat,
//     //   });
//     // } catch (err) {
//     //   console.error(err);
//     // }
//   });

//   socket.on("disconnect", () => {
//     // console.log(disconnected);
//     // userSocketMap.delete(UserId);
//   });
// });

io.on("connection", (socket) => {
  socket.on("join-chat", ({ AuthorId }) => {
    socket.join("room 1");
    console.log(`${AuthorId} joined room 1`);
  });

  socket.on("message:create", ({ message, chat }) => {
    console.log("Received message:", message);
    io.to(chat).emit("message:delivered", message);
    // Save message to database or perform other operations if needed
  });

  socket.on("disconnect", () => {
    // Handle disconnection if needed
  });
});

module.exports = { io, server };