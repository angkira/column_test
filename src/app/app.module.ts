import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColumnsModule } from './modules/columns/columns.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    ColumnsModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
