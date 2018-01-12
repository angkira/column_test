import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';

import { ItemService } from './services/item.service';

import { OrderModule } from 'ngx-order-pipe';
import { SearchItemPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [ItemService],
  declarations: [
    ItemListComponent,
    ItemInfoComponent,
    ItemComponent,
    SearchItemPipe
  ],
  exports: [
    ItemListComponent,
    ItemInfoComponent,
    ItemComponent
  ]
})
export class ColumnsModule { }
