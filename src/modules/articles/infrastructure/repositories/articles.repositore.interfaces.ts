export interface GetArticle {
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

export interface UpdateArticle {
  name?: string;
  articleId: number;
  email?: string;
  decription?: string;
}
