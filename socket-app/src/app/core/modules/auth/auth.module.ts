import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthPageComponent } from './pages/auth/auth.page';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [AuthPageComponent, LoginComponent, RegisterComponent]
})
export class AuthModule {}
