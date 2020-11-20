import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [MatButtonModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule {}
