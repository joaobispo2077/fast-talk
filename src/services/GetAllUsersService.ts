import { injectable } from 'tsyringe';

import { User, UserModel } from '../models/User';

@injectable()
export class GetAllUsersService {
  async execute(): Promise<User[]> {
    const users = await UserModel.find();
    return users;
  }
}
