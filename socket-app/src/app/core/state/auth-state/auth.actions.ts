export class Login {
  public static readonly type = '[Auth] Login';
  constructor(private readonly login: string, private readonly password: string) { }
}

export class Logout {
  public static readonly type = '[Auth] Logout';
}
