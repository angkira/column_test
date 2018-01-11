import { Item } from './../../common/classes/item';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;
  @Input()
  active: boolean;
  constructor() { }

  ngOnInit() {
  }

}
