import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatToolbarModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
