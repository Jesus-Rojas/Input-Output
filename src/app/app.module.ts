import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
