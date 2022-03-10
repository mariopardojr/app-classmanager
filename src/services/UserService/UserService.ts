import { api } from '../api';
import { IRawAuthenticate } from './interfaces/IRawAuthenticate';

const authenticate = async (email: string, password: string): Promise<IRawAuthenticate> => {
  const { data } = await api.post<IRawAuthenticate>('auth/authenticate', {
    email,
    password,
  });

  return data;
};

const getUser = async (id: string) => {
  const { data } = await api.get(`auth/user/${id}`);

  return data;
};

const UserService = {
  authenticate,
  getUser,
};

export default UserService;
