import { ResultErrorFactory } from '../../contracts/result/result-error-factory';
import { api } from '../api';
import { IRawAuthenticate } from './interfaces/IRawAuthenticate';
import { IRawUser } from './interfaces/IRawUser';

const authenticate = async (email: string, password: string): Promise<IRawAuthenticate> => {
  try {
    const { data } = await api.post<IRawAuthenticate>('auth/authenticate', {
      email,
      password,
    });

    return data;
  } catch (error) {
    // @ts-ignore
    return ResultErrorFactory.create(error);
  }
};

const getUser = async (id: string) => {
  try {
    const { data } = await api.get(`auth/user/${id}`);

    return data;
  } catch (error) {
    // @ts-ignore
    return ResultErrorFactory.create(error);
  }
};

const UserService = {
  authenticate,
  getUser,
};

export default UserService;
