import { Module } from '@nestjs/common';
import { UserController } from './presentation';
import { UserService } from './application';
import { CryptoModule } from '@test-project/crypto';
import { UserDomain } from './domain';
import { UserEntity, UserRepository } from './infrastructure';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtConfigService } from 'src/config/jwt';

@Module({
  controllers: [UserController],
  exports: [UserService],
  imports: [CryptoModule, JwtModule.registerAsync({ useClass: JwtConfigService }), TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserDomain, UserRepository],
})
export class UserModule {}
