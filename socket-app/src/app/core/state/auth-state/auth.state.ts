import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AuthService } from 'app/core/services/auth.service';

import { Login, Logout } from './auth.actions';
import { AuthStateModel } from './auth.model';

import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    loading: false
  }
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  @Selector() public static user({ user }: AuthStateModel) {
    return user;
  }

  @Selector() public static loading({ loading }: AuthStateModel) {
    return loading;
  }

  @Action(Login)
  public login(ctx: StateContext<AuthStateModel>, { authData }: Login) {
    ctx.patchState({ loading: true });
    this.authService.login(authData).pipe(tap(user => ctx.patchState({ user, loading: false })));
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthStateModel>) {}
}
