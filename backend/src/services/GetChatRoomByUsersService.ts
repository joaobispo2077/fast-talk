import { ObjectId } from 'mongoose';
import { injectable } from 'tsyringe';

import { ChatRoomModel } from '../models/ChatRoom';

@injectable()
export class GetChatRoomByUsersService {
  async execute(usersId: ObjectId[]) {
    const chatRoom = await ChatRoomModel.findOne({
      usersId: {
        $all: usersId,
      },
    }).exec();

    return chatRoom;
  }
}
