import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { MainRoutingModule } from './main-routing.module';

import { MainPageComponent } from './pages/main/main.component';

@NgModule({
  imports: [SharedModule, MainRoutingModule],
  declarations: [MainPageComponent]
})
export class MainModule {}
