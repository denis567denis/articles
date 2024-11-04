import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Config } from '../configuration.type';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService<Config>) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const { port, username, password, database } = this.configService.get('postgres');

    return {
      type: 'postgres',
      host: process.env.TEST_HOST,
      port,
      username,
      password,
      database,
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
