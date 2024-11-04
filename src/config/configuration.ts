import { jwtConfiguration } from './jwt';
import { postgresConfiguration } from './postgres';
import { redisConfiguration } from './redis';

export const configuration = [postgresConfiguration, redisConfiguration, jwtConfiguration];
