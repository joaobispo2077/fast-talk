import { ChatRoom, ChatRoomModel } from '../models/ChatRoom';
import { User } from '../models/User';

type GetChatRoomByServiceResponse =
  | (Omit<ChatRoom, 'usersId'> & {
      usersId: User[];
    })
  | null;

export class GetChatRoomByIdService {
  async execute(chatRoomId: string): Promise<GetChatRoomByServiceResponse> {
    const chatRoom = await ChatRoomModel.findOne({
      chatRoomId,
    })
      .populate('usersId')
      .exec();

    return chatRoom as GetChatRoomByServiceResponse;
  }
}
