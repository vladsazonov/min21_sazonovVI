import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { SocketService } from 'app/core/services/socket.service';
import { Logout } from 'app/core/state/auth-state/auth.actions';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public date: string;
  public weather: any;
  public image: string | null;
  public scheduleMessage: string;
  public coordinates: { lat: number; lng: number };

  constructor(private socketService: SocketService, private store: Store, private router: Router) {}

  public ngOnInit() {
    this.socketService
      .listen('date')
      .pipe(untilDestroyed(this))
      .subscribe((data: string) => {
        this.date = data;
      });

    this.socketService
      .listen('weather')
      .pipe(untilDestroyed(this))
      .subscribe((data: any) => {
        this.weather = data;
      });

    this.socketService
      .listen('image')
      .pipe(untilDestroyed(this))
      .subscribe((data: string) => {
        if (!data) {
          this.image = null;
        } else {
          this.image = `assets/images/${data}.png`;
        }
      });

    this.socketService
      .listen('schedule')
      .pipe(untilDestroyed(this))
      .subscribe((data: string) => {
        this.scheduleMessage = data;
      });
  }

  public ngOnDestroy() {}

  public getUserPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.coordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }

  public onLogout() {
    this.store.dispatch(new Logout()).subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
