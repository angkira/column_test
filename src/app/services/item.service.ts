import { Item } from '../common/classes/item';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  private _items: Item[] = [];
  private _currentItem: Item;
  @Output()
  itemChoosen: EventEmitter<Object>;
  constructor(private http: HttpClient) {
    this.itemChoosen = new EventEmitter();
   }

  get currentItem(): Item {
    return this._currentItem;
  }

  public selectItem(item: Item): void {
    this._currentItem = item;    
    this.itemChoosen.emit();
  }

  get items(): Observable<Object> {
    if (this._items.length) {
      return new Observable(observer => {
        observer.next(this._items);
        observer.complete();
      })
    } else {
      return this._getItems();      
    }
  }
  private _getItems():Observable<Object> {
    return new Observable(observer => {
      this.http.get('http://localhost:8080/api/items')
      .subscribe((data: any) => {
        if (data.success) {
          if (data.items && data.items.length) {
            this._items = [];
            console.log('Items are gotten successfully')
          }
          data.items.forEach(item => {
            try {
              this._items.push(item);
            } catch(e) {
              console.error(`Got an invalid element ${item}`, e);
            }
          })
        } else {
          console.error("Error on server-side while getting items");     
        }
        observer.next(this._items);
        observer.complete();
      }, error => {
        console.error(error); //We already will get an error in browser, but... who knows?:)
        observer.error(error);
      });
    })
    
    }
}
