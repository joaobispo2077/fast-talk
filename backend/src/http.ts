/* eslint-disable import/no-named-as-default-member */
import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Server as SocketIoServer } from 'socket.io';

import { DATABASE_URL } from './configs';
import { router } from './routes';

import { createServer } from 'http';
import path from 'path';

mongoose.connect(DATABASE_URL, {});

const app = express();

const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).send('Something broke!');
});

const io = new SocketIoServer(server);
io.on('connection', (socket) => {
  console.log('New client connected');
  console.log('socket id:', socket.id);
});

export { server, io };
