import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../infrastructure';
import { CreateUserDomain, GetUserByEmailDomain, UpdateUserDomain } from './user.domain.interface';

@Injectable()
export class UserDomain {
  private readonly logger = new Logger(UserDomain.name);
  constructor(private readonly userRepository: UserRepository) {}

  public async getUserByEmail({ email }: GetUserByEmailDomain) {
    return this.userRepository.getUserByEmail({ email });
  }

  public async createUser(user: CreateUserDomain) {
    return this.userRepository.createUser(user);
  }

  public async deleteUser(email: string) {
    return this.userRepository.deleteUser(email);
  }

  public async updateUser({ userId, email, name, password }: UpdateUserDomain) {
    if (!email && !name && !password) {
      return null;
    }
    return this.userRepository.updateUser({ userId, email, name, password });
  }
}
