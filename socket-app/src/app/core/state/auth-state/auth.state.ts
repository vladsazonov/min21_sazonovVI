import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { catchError, filter, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AuthService } from 'app/core/services/auth.service';

import { Login, LoginFailed, LoginSuccess, Logout, Register, RegisterFailed, RegisterSuccess } from './auth.actions';
import { AuthStateModel } from './auth.model';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    isAuthed: false,
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

  @Selector() public static isAuthed({ isAuthed }: AuthStateModel) {
    return isAuthed;
  }

  @Action(Login)
  public login(ctx: StateContext<AuthStateModel>, { authData }: Login) {
    ctx.patchState({ loading: true });

    return this.authService.login(authData).pipe(
      filter(user => !!user),
      tap(user => ctx.patchState({ user, loading: false, isAuthed: true })),
      tap(() => ctx.dispatch(new LoginSuccess())),
      catchError(error => {
        ctx.dispatch(new LoginFailed());
        return throwError(error);
      })
    );
  }

  @Action(Register)
  public register(ctx: StateContext<AuthStateModel>, { authData }: Register) {
    ctx.patchState({ loading: true });

    return this.authService.register(authData).pipe(
      filter(resp => !!resp),
      tap(() => ctx.patchState({ loading: false })),
      tap(() => ctx.dispatch(new RegisterSuccess())),
      catchError(error => {
        ctx.dispatch(new RegisterFailed());
        return throwError(error);
      })
    );
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ user: null, isAuthed: false });
    ctx.dispatch(new Navigate(['/auth/login']));
  }

  @Action(LoginSuccess)
  public onLoginSuccess(ctx: StateContext<AuthStateModel>) {
    // tslint:disable-next-line: no-console
    console.log('Вы вошли в систему');
    ctx.dispatch(new Navigate(['/home']));
  }

  @Action(RegisterSuccess)
  public onRegisterSuccess(ctx: StateContext<AuthStateModel>) {
    // tslint:disable-next-line: no-console
    console.log('Вы успешно зарегистрировались');
    ctx.dispatch(new Navigate(['/auth/login']));
  }

  @Action(LoginFailed)
  public onLoginFailed(ctx: StateContext<AuthStateModel>) {
    // tslint:disable-next-line: no-console
    console.log('Ошибка при входе');
  }

  @Action(RegisterFailed)
  public onRegisterFailed(ctx: StateContext<AuthStateModel>) {
    // tslint:disable-next-line: no-console
    console.log('Ошибка при регистрации');
  }
}
