import { JwtConfig } from './jwt.config.interface';

export const jwtConfiguration = (): JwtConfig => {
  return {
    jwt: {
      secret: process.env.TEST_JWT_SECRET,
    },
  };
};
