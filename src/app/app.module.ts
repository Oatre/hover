import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoverBoxComponent } from './hover-box/hover-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
