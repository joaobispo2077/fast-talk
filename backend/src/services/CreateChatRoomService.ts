import { injectable } from 'tsyringe';

import { ChatRoomModel } from '../models/ChatRoom';

import { CreateChatDTO } from 'src/dtos/ChatDTO';

@injectable()
export class CreateChatRoomService {
  async execute({ usersId, name, expirationInDays }: CreateChatDTO) {
    const newChatRoom = await ChatRoomModel.create({
      usersId,
      name: name ?? String(Date.now()),
      expirationInDays,
    });

    return newChatRoom;
  }
}
