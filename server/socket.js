const app = require("./app");
const { Server } = require("socket.io");
const { createServer } = require("http");
// const { authentication, authSocket } = require("./middlewares/authentication");
const server = createServer(app);
const { ChatMessage } = require("./models");

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

// const userSocketMap = new Map();

// io.use(authSocket);

io.on("connection", (socket) => {
  const UserId = socket.id;
  console.log(`${UserId} connected`);

  // userSocketMap.set(userId, socket.id);

  // socket.on("ping", (message) => {
  //   console.log({ message }, "dari client");
  // });

  socket.on("join-chat", (AuthorId) => {
    socket.join("test");
    console.log("joined a chat " + AuthorId);
  });
  socket.on("leave-chat", (chat) => {
    socket.leave(chat);
    console.log("leave chat " + chat);
  });

  socket.on("message:create", async ({ message, chat }) => {
    console.log({ message });
    io.to(chat).emit("message: delivered", { message });
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
    console.log(` disconnected`);
    // userSocketMap.delete(UserId);
  });
});

module.exports = { io, server };
