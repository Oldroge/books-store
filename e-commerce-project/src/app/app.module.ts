import { NgModule } from '@angular/core';
import { coreModule } from './core-module/modules';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    coreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
