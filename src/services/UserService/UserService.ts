import { ResultErrorFactory } from '../../contracts/result/result-error-factory';
import { api } from '../api';
import { IRawAuthenticate } from './interfaces/IRawAuthenticate';

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

const UserService = {
  authenticate,
};

export default UserService;
