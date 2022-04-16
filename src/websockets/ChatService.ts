import { container } from 'tsyringe';

import { io } from '../http';
import { CreateUserService } from '../services/CreateUserService';
import { GetAllUsersService } from '../services/GetAllUsersService';

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

    socket.broadcast.emit('user_entered', user);
    console.log(user);

    const getAllUsersService = container.resolve(GetAllUsersService);
    const users = await getAllUsersService.execute();
    socket.emit('get_users', users);
  });
});
