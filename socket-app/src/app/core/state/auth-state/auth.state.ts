import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";

import { Login, Logout } from './auth.actions';
import { AuthStateModel } from './auth.model';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    loading: false
  }
})
export class AuthState implements NgxsOnInit {

  @Selector() public static user({ user }: AuthStateModel ) {
    return user;
  }

  public ngxsOnInit(ctx?: StateContext<any>) {
    throw new Error('Method not implemented.');
  }

  @Action(Login)
  public login(ctx: StateContext<AuthStateModel>) {

  }

   @Action(Logout)
  public logout(ctx: StateContext<AuthStateModel>) {

  }
}
