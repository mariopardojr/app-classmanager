import { api } from '../api';
import { User } from './types';

type UserAuth = {
  user: User;
  token: string;
};

interface AuthenticateResponse {
  isError?: boolean;
  status: number;
  data?: UserAuth;
  errorMessage?: string;
}

const getUserById = async (id: string): Promise<User> => {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
};

const authenticate = async (email: string, password: string): Promise<AuthenticateResponse> => {
  const { data } = await api.post<AuthenticateResponse>('auth/authenticate', { email, password });
  return data;
};

const UserService = {
  getUserById,
  authenticate,
};

export default UserService;
