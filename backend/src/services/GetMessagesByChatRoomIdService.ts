import { injectable } from 'tsyringe';

import { MessageModel } from '../models/Message';

@injectable()
export class GetMessagesByChatRoomIdService {
  async execute(chatRoomId: string) {
    const messages = await MessageModel.find({
      roomId: chatRoomId,
    })
      .populate('from')
      .exec();

    return messages;
  }
}
