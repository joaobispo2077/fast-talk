import { container } from 'tsyringe';

import { io } from '../http';
import { CreateChatRoomService } from '../services/CreateChatRoomService';
import { CreateUserService } from '../services/CreateUserService';
import { GetAllUsersService } from '../services/GetAllUsersService';
import { GetChatRoomByUsersService } from '../services/GetChatRoomByUsersService';
import { GetUserBySocketIdService } from '../services/GetUserBySocketIdService';

io.on('connect', (socket) => {
  socket.emit('chat_initialized', 'Welcome to the chat!');

  socket.on('start_view', async (data) => {
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

    socket.on('start_chat', async (data, callback) => {
      const createChatRoomService = container.resolve(CreateChatRoomService);
      const getUserBySocketIdService = container.resolve(
        GetUserBySocketIdService,
      );
      const getChatRoomByUsersService = container.resolve(
        GetChatRoomByUsersService,
      );

      const userLogged = await getUserBySocketIdService.execute(socket.id);
      const users = [userLogged?._id, data.idUser];

      let chatRoom = await getChatRoomByUsersService.execute(users);

      if (!chatRoom) {
        chatRoom = await createChatRoomService.execute(users);
      }

      console.log('chatRoom', chatRoom);
      callback(chatRoom);
    });
  });
});
