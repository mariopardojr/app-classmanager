import { IRawUser } from './IRawUser';

export interface IRawAuthenticate {
  status: number;
  user: IRawUser;
  token: string;
  message: string;
}
