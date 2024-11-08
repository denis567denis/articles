import * as crypto from 'crypto';

export class CryptoDomain {
  private readonly salt: string;

  constructor() {
    this.salt = 'denis';
  }

  public async compare(password: string, hashedPassword: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const [hashedPasswordSalt, key] = hashedPassword.split(':');

      return crypto.scrypt(password, hashedPasswordSalt, 64, (error, derivedKey) => {
        if (error) {
          reject(error);

          return;
        }

        return resolve(key == derivedKey.toString('hex'));
      });
    });
  }

  public generateUniqueId() {
    return crypto.randomBytes(16).toString('hex');
  }

  public async hash(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      return crypto.scrypt(password, this.salt, 64, (error, derivedKey) => {
        if (error) {
          reject(error);

          return;
        }

        return resolve(this.salt + ':' + derivedKey.toString('hex'));
      });
    });
  }
}
