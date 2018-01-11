import { ItemListModel } from './common/classes/item-list-model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  public model1: ItemListModel = {
    search: true,
    sort: true,
    filter: false
  }
  public model2: ItemListModel = {
    search: false,
    sort: false,
    filter: true
  }
}
