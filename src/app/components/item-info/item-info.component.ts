import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
