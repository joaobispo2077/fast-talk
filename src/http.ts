import express from "express";
import path from "path";
import { createServer } from "http";
import { Server as SocketIoServer } from 'socket.io';
import mongoose from "mongoose";
import { DATABASE_URL } from "./configs";

mongoose.connect(DATABASE_URL, {});

const app = express();

const server = createServer(app);
app.use(express.static(path.join(__dirname, "..", "public")));

const io = new SocketIoServer(server);
io.on("connection", (socket) => {
  console.log("New client connected");
  console.log("socket id:", socket.id);
});


export { server, io };