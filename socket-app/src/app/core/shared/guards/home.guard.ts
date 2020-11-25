import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HomeGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate() {
    const authStore = JSON.parse(localStorage.getItem('auth'));

    if (!authStore.isAuthed) {
      this.router.navigate(['auth/login']);
      return false;
    }

    return true;
  }
}
