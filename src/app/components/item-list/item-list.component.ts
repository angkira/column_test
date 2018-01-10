import { Item } from './../../item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  constructor(private itemService: ItemService,
              private detector: ChangeDetectorRef) { }

  items: Item[] = [];
  sort: boolean;
  search: string;
  ngOnInit() {
    this.itemService.items
      .subscribe((data:Item[]) => {
        this.items = data;
        this.detector.detectChanges();
      });
    
  }

}
