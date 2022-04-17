import { injectable } from 'tsyringe';

import { CreateMessageDTO } from '../dtos/MessageDTO';
import { Message, MessageModel } from '../models/Message';

@injectable()
export class CreateMessageService {
  async execute({
    chatRoomId,
    text,
    from,
  }: CreateMessageDTO): Promise<Message> {
    const message = await MessageModel.create({
      text,
      roomId: chatRoomId,
      from,
    });

    return message;
  }
}
