import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueButterflyComponent } from './blue-butterfly.component';
import { SquareOakModule } from 'angular-module-example-v3/src/app';

@NgModule({
  imports: [
    CommonModule,
    SquareOakModule
  ],
  exports: [
    BlueButterflyComponent
  ],
  declarations: [BlueButterflyComponent]
})
export class BlueButterflyModule { }
