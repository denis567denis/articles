export interface GetUserByEmailService {
  email: string;
}

export interface SignInService {
  email: string;
  password: string;
}

export interface DeleteUserByIdService {
  email: string;
}

export interface CreateUserService {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserService {
  userId: number;
  email: string;
  name?: string;
  password?: string;
}
