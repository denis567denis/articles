export interface GetArticleDomain {
  email?: string;
  name?: string;
  sort: boolean;
  order?: 'ASC' | 'DESC';
  sortParam?: 'email' | 'date' | 'name';
}

export interface CreateArticleDomain {
  name: string;
  decription: string;
  email: string;
}

export interface UpdateArticleDomain {
  name?: string;
  email?: string;
  articleId: number;
  decription?: string;
}
