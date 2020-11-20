import { IAuthData } from 'lib/interfaces/auth-data';

export class Login {
  public static readonly type = '[Auth] Login';
  constructor(public readonly authData: IAuthData) {}
}

export class Logout {
  public static readonly type = '[Auth] Logout';
}
