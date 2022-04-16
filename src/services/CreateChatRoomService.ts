import { injectable } from 'tsyringe';

import { ChatRoomModel } from '../models/ChatRoom';

@injectable()
export class CreateChatRoomService {
  async execute(usersId: string[]) {
    const chatRoom = await ChatRoomModel.create({
      usersId,
    });

    return chatRoom;
  }
}
