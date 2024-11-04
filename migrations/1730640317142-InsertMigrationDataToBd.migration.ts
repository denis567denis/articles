import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertMigrationDataToBd1730640317142 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`  
        INSERT INTO articles_entity (name, decription, email) VALUES  
        ('super','super denis', 'rest@bk.ru'),  
        ('denis','denis', 'rest@bk.ru');
      `);

    await queryRunner.query(`  
        INSERT INTO user_entity (name, email, password) VALUES  
        ('denis','rest@bk.ru', 'denis:0f0db1da732529655a7ab7617633d5fc6ec55370db70cc4b5e79874f03cc17c24bc818bda2854bb73da34b50dfd46078dcc95bdd0548bbd7a486cda38314a3db');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`  
        DELETE FROM articles_entity;  
      `);

    await queryRunner.query(`  
        DELETE FROM user_entity;  
      `);
  }
}
