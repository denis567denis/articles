export interface GetUserByEmailDomain {
  email: string;
}

export interface CreateUserDomain {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserDomain {
  userId: number;
  email: string;
  name?: string;
  password?: string;
}
