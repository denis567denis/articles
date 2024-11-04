import { PostgresConfig } from './postgres.type';

export const postgresConfiguration = (): PostgresConfig => {
  return {
    postgres: {
      port: parseInt(process.env.TEST_POSTGRES_PORT),
      username: process.env.TEST_POSTGRES_USERNAME,
      password: process.env.TEST_POSTGRES_PASSWORD,
      database: process.env.TEST_POSTGRES_DATABASE,
    },
  };
};
