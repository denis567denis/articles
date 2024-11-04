import { RedisConfig } from './redis-config.type';

export const redisConfiguration = (): RedisConfig => {
  return {
    redis: {
      url: process.env.TEST_REDIS_URL,
    },
  };
};
