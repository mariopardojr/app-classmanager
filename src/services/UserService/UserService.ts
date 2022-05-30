import { AxiosError } from 'axios';
import { UserRegister } from '../../pages/Register/types';
import { api } from '../api';
import { IRawAuthenticate } from '../interfaces/IRawAuthenticate';
import { IRawUser } from '../interfaces/IRawUser';

const authenticate = async (email: string, password: string): Promise<IRawAuthenticate> => {
  try {
    const { data } = await api.post<IRawAuthenticate>('auth/authenticate', {
      email,
      password,
    });
    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const register = async (user: UserRegister) => {
  try {
    const { data } = await api.post('auth/register', user);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};

const getUser = async (id: string): Promise<IRawUser> => {
  const { data } = await api.get(`auth/user/${id}`);
  return data;
};

const UserService = {
  authenticate,
  register,
  getUser,
};

export default UserService;
