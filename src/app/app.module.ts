import { SearchItemPipe } from './pipes/search.pipe';
import { ItemService } from './services/item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemInfoComponent,
    ItemComponent,
    SearchItemPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
