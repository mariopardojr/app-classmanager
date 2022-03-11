import { IRawUser } from './IRawUser';

export interface IRawAuthenticate {
  status: number;
  user: IRawUser;
  message: string;
  token: string;
}
