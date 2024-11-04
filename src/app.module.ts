import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@nestjs-modules/ioredis';
import { configuration } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisConfigService } from './config/redis';
import { PostgresConfigService } from './config/postgres';
import { CryptoModule } from '@test-project/crypto';
import { JwtStrategy } from '@test-project/guards';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './config/jwt';

import { UserModule } from './modules/user';
import { ArticlesModule } from './modules/articles';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: configuration }),
    RedisModule.forRootAsync({ useClass: RedisConfigService }),
    TypeOrmModule.forRootAsync({ useClass: PostgresConfigService }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
    CryptoModule,
    UserModule,
    ArticlesModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
