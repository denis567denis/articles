export interface GetArticlesService {
  email?: string;
  name?: string;
  sort: boolean;
  order?: 'ASC' | 'DESC';
  sortParam?: 'email' | 'date' | 'name';
}

export interface DeleteArticleByIdService {
  articleId: number;
}

export interface CreateArticleService {
  name: string;
  decription: string;
  email: string;
}

export interface UpdateArticleService {
  name?: string;
  articleId: number;
  email?: string;
  decription?: string;
}
