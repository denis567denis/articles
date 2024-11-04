import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { JwtService } from '@nestjs/jwt';

describe('AppController', () => {
  let app: INestApplication;
  let jwtService: JwtService;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    jwtService = app.get<JwtService>(JwtService);
    token = jwtService.sign({ email: 'rest@bk.ru' });
    await app.init();
  });

  it('createUser', () => {
    const userData = { name: 'denis_super', password: 'denis', email: 'den@bk.ru' };
    return request(app.getHttpServer())
      .post('/user/createUser')
      .send(userData)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toHaveProperty('accessToken');
        expect(body.user.email).toEqual('den@bk.ru');
      });
  });

  it('getUserByEmail', () => {
    const userData = { email: 'den@bk.ru' };
    return request(app.getHttpServer())
      .get('/user/getUserByEmail')
      .set('Authorization', `Bearer ${token}`)
      .send(userData)
      .expect(200)
      .expect(({ body }) => {
        expect(body.email).toEqual('den@bk.ru');
      });
  });

  it('updateUser', () => {
    const userData = { userId: 2, email: 'den@bk.ru', name: 'test' };
    return request(app.getHttpServer())
      .patch('/user/updateUser')
      .set('Authorization', `Bearer ${token}`)
      .send(userData)
      .expect(200)
      .expect(({ body }) => {
        expect(body.affected).toEqual(1);
      });
  });

  it('deleteUser', () => {
    const userData = { email: 'den@bk.ru' };
    return request(app.getHttpServer())
      .delete('/user/deleteUser')
      .set('Authorization', `Bearer ${token}`)
      .send(userData)
      .expect(200)
      .expect(({ body }) => {
        expect(body.affected).toEqual(1);
      });
  });

  it('createArticle', () => {
    const articleData = { name: 'super', decription: 'super denis', email: 'den@bk.ru' };
    return request(app.getHttpServer())
      .post('/article/createArticle')
      .set('Authorization', `Bearer ${token}`)
      .send(articleData)
      .expect(201)
      .expect(({ body }) => {
        expect(body.article).toHaveProperty('email');
        expect(body.article.email).toEqual('den@bk.ru');
      });
  });

  it('getArticles', () => {
    const articleData = { name: 'super', sort: true };
    return request(app.getHttpServer())
      .get('/article/getArticles')
      .send(articleData)
      .expect(200)
      .expect(({ body }) => {
        expect(body.article).toHaveLength(2);
        expect(body.article[0].article_email).toEqual('rest@bk.ru');
      });
  });

  it('updateArticle', () => {
    const articleData = { name: 'forest', articleId: 3 };
    return request(app.getHttpServer())
      .patch('/article/updateArticle')
      .set('Authorization', `Bearer ${token}`)
      .send(articleData)
      .expect(200)
      .expect(({ body }) => {
        expect(body.affected).toEqual(1);
      });
  });

  it('deleteArticle', () => {
    const articleData = { articleId: 3 };
    return request(app.getHttpServer())
      .delete('/article/deleteArticle')
      .set('Authorization', `Bearer ${token}`)
      .send(articleData)
      .expect(200)
      .expect(({ body }) => {
        expect(body.affected).toEqual(1);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
