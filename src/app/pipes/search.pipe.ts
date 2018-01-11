import { Item } from './../item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem',
  pure: false
})

export class SearchItemPipe implements PipeTransform {
  transform(items: Item[], searchWord: string): Item[] {
    return searchWord ? items.filter(item => {
      return item.name.toLowerCase()
        .includes(searchWord.toLowerCase())
    }) : items;
  }
}