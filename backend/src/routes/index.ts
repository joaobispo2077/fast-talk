/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { container } from 'tsyringe';

import { CreateChatRoomService } from '../services/CreateChatRoomService';

import { CreateUserService } from 'src/services/CreateUserService';

const router = Router();

router.post('/chats', async (request, response) => {
  try {
    const { body } = request;
    console.log(body);

    const createUserService = container.resolve(CreateUserService);

    const userCreated = await createUserService.execute({
      avatar: body.avatar,
      email: body.email,
      name: body.username,
    });

    const createChatRoomService = container.resolve(CreateChatRoomService);
    const newChatRoom = await createChatRoomService.execute({
      usersId: [userCreated?._id],
      name: body.chatname,
      expirationInDays: body.expirationInDays,
    });

    return response.json(newChatRoom);
  } catch (error: any) {
    return response.status(400).json({ error: error?.message });
  }
});

router.get('/test', (req, res) => {
  res.send('Hello World!');
});

export { router };
