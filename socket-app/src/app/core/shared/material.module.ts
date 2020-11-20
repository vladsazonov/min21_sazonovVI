import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MODULES = [MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
