import { io } from "../http";

io.on("connect", socket => {
  socket.emit("chat_initialized", "Welcome to the chat!");
})