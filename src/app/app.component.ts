
import { Component } from '@angular/core';
import { ItemListModel } from './modules/columns/common/classes/item-list-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
