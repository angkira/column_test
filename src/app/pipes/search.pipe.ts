import { Item } from './../item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchItem'})

export class SearchItemPipe implements PipeTransform {
  transform(items: Item[], searchWord: string): Item[] {
    console.log(searchWord);
    
    return searchWord ? items.filter(item => {
      return item.name.indexOf(searchWord) > -1
    }) : items;
  }
}