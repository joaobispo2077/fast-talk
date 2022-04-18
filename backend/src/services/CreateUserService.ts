import { injectable } from 'tsyringe';

import { CreateUserDTO } from '../dtos/UserDTO';
import { UserModel } from '../models/User';

@injectable()
export class CreateUserService {
  async execute({ avatar, email, name, socketId }: CreateUserDTO) {
    console.log('CreateUserService', { avatar, email, name, socketId });
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
        { new: true },
      );

      return updatedUser;
    }

    if (!email) {
      throw new Error('Email is required');
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
