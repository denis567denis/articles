export interface GetArticles {
  email?: string;
  name?: string;
  sort: boolean;
  order?: 'ASC' | 'DESC';
  sortParam?: 'email' | 'date' | 'name';
}

export interface CreateArticle {
  name: string;
  decription: string;
  email: string;
}

export interface DeleteArticle {
  articleId: number;
}

export interface UpdateArticle {
  articleId: number;
  name?: string;
  email?: string;
  decription?: string;
}
