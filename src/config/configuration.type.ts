import { JwtConfig } from './jwt';
import { PostgresConfig } from './postgres';
import { RedisConfig } from './redis';

export interface Config extends PostgresConfig, RedisConfig, JwtConfig {}
