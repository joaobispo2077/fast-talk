import { injectable } from 'tsyringe';

import { CreateUserDTO } from '../dtos/UserDTO';
import { UserModel } from '../models/User';

@injectable()
export class CreateUserService {
  async execute({ avatar, email, name, socketId }: CreateUserDTO) {
    const userAlreadyExists = await UserModel.findOne({ email });

    if (userAlreadyExists) {
      const updatedUser = await UserModel.findOneAndUpdate(
        {
          _id: userAlreadyExists._id,
        },
        {
          $set: {
            socketId,
            avatar,
            name,
          },
        },
      );

      return updatedUser;
    }

    const user = await UserModel.create({
      email,
      socketId,
      name,
      avatar,
    });

    return user;
  }
}
