export interface GetUserByEmail {
  email: string;
}

export interface SingIn {
  email: string;
  password: string;
}

export interface CreateUser {
  email: string;
  name: string;
  password: string;
}

export interface DeleteUser {
  email: string;
}

export interface UpdateUser {
  userId: number;
  email: string;
  name?: string;
  password?: string;
}
