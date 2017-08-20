import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueButterflyModule } from './blue-butterfly/blue-butterfly.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlueButterflyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
