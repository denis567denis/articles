import { InsertMigrationDataToBd1730640317142 } from 'migrations/1730640317142-InsertMigrationDataToBd.migration';
import { ArticlesEntity } from 'src/modules/articles/infrastructure';
import { UserEntity } from 'src/modules/user/infrastructure';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'denis',
  password: 'denis',
  database: 'articles',
  synchronize: false,
  entities: [UserEntity, ArticlesEntity],
  migrations: [InsertMigrationDataToBd1730640317142],
});
