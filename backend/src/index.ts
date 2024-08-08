import { Socket } from "socket.io";
import http from "http";
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);  // Fix: pass 'app' instead of 'http'

const io = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
