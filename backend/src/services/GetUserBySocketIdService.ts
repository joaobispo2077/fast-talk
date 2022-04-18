import { User, UserModel } from '../models/User';

export class GetUserBySocketIdService {
  async execute(socketId: string): Promise<User | null> {
    const user = await UserModel.findOne({
      socketId,
    });

    return user;
  }
}
