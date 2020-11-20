import { IUser } from 'src/lib/interfaces/user.interface';

export interface AuthStateModel  {
  user: IUser;
  loading: boolean;
}
