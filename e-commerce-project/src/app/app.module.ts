import { NgModule, enableProdMode } from '@angular/core';
import { coreModule } from './core-module/core.modules';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

enableProdMode();
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
