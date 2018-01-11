import { ItemService } from './../../services/item.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Item } from '../../common/classes/item';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemInfoComponent implements OnInit {

  item: Item = new Item();
  constructor(private service: ItemService,
    private detector: ChangeDetectorRef) { }

  ngOnInit() {
    this.service.itemChoosen.subscribe(() => {
      this.item = this.service.currentItem;
      this.detector.detectChanges();
    })
  }

}
