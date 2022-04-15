import express from "express";
import path from "path";
import { createServer } from "http";
import { Server as SocketIoServer } from 'socket.io';

const APP_PORT = 3000;
const app = express();

const server = createServer(app);
app.use(express.static(path.join(__dirname, "..", "public")));

const io = new SocketIoServer(server);
io.on("connection", (socket) => {
  console.log("New client connected");
  console.log("socket id:", socket.id);
});

server.listen(APP_PORT, () => console.log(`Server is running on port ${APP_PORT}`));