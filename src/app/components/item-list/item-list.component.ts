import { FilterModel } from './../../common/classes/filter-model';
import { ItemListModel } from '../../common/classes/item-list-model';
import { Item } from '../../common/classes/item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  constructor(private itemService: ItemService,
              private detector: ChangeDetectorRef) { }

  public items: Item[] = [];
  public sort: boolean = false;
  public separately: boolean = false;

  public search: string = '';
  @Input()
  public model: ItemListModel;
  public filterModel: FilterModel;
  ngOnInit() {
    this.filterModel = new FilterModel();
    this.itemService.items
      .subscribe((data:Item[]) => {
        this.items = data;
        this.detector.detectChanges();
  });
    
  }
  public toggleSortReverse(value?):void {
    this.sort = value ? value : !this.sort;
  }
  public toggleSeparate(value?):void {
    this.separately = value ? value : !this.separately;
  }
  public detectSearchWord(e):void {
    this.search = e.target.value;
  }

}
