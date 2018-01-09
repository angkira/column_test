import { Item } from './../item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  items: Item[];
  constructor(private http: HttpClient) { }

  private _getItems():Observable<Object> {
    return this.http.get('https://localhost:8080/api/items');
  }
  public getItems(retry?): Item[] {
    if (this.items && this.items.length && !retry) {
      return this.items;
    } else {
      this._getItems()
        .subscribe((data: any) => {
          if (data.success) {
            if (data.items && data.items.length) {
              console.log('Items got successfully')
            }
            data.items.forEach(item => {
              try {
                this.items.push(item);
              } catch(e) {
                console.error(`Got an invalid element ${item}`, e);
              }
            })
          } else {
            console.error("Error on server-side while getting items");      
          }
          return this.items;
        }, error => {
          console.error(error); //We already will get an error in browser, but... who knows?:)
          return this.items;
        });      
    }
  }


}
