import { container } from 'tsyringe';

import { io } from '../http';
import { CreateUserService } from '../services/CreateUserService';

io.on('connect', (socket) => {
  socket.emit('chat_initialized', 'Welcome to the chat!');

  socket.on('start_chat', async (data) => {
    const { name, email, avatar } = data;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      name,
      email,
      avatar,
      socketId: socket.id,
    });

    console.log(user);
  });
});
