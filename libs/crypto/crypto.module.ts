import { Global, Module } from '@nestjs/common';

import { CryptoDomain } from './domain';

@Global()
@Module({
  exports: [CryptoDomain],
  imports: [],
  providers: [CryptoDomain],
})
export class CryptoModule {}
