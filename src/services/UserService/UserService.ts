import { api } from '../api';
import { User } from './types';

const getUser = async (id: string): Promise<User> => {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
};

const UserService = {
  getUser,
};

export default UserService;
