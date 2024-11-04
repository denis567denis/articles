import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import { CreateUser, GetUserByEmail, UpdateUser } from './user.repositore.interfaces';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}

  public async getUserByEmail({ email }: GetUserByEmail) {
    return this.userEntity.findOne({ where: { email } });
  }

  public async createUser(user: CreateUser) {
    return this.userEntity.save(user);
  }

  public async deleteUser(email: string) {
    return this.userEntity.delete({ email });
  }

  public async updateUser({ userId, ...user }: UpdateUser) {
    return this.userEntity.update({ id: userId }, user);
  }
}
