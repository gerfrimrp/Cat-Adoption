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

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on("join-chat", (data) => {
    const { AuthorId } = data;
    socket.join("test");
    console.log(`User ${AuthorId} joined chat`);
  });

  socket.on("message:create", async ({ message, chat }) => {
    console.log("Message received:", message);
    io.to(chat).emit("message:delivered", message); // Emitting the message to "test" room
    // You can uncomment below to save messages to database if needed
    // try {
    //   await ChatMessage.create({
    //     message,
    //     chat,
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

module.exports = { io, server };
