import { Item } from '../common/classes/item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem',
  pure: false
})

export class SearchItemPipe implements PipeTransform {
  transform(items: Item[], searchWord: string, filters: Array<any>, separately: boolean): Item[] {
    filters = filters.filter(item => {
      return item.active
    }).map(item => {
      return item.name.toLowerCase();
    })
    
    return items.filter(item => {
      let check: boolean = true;
      if (searchWord) {
        check = item.name.toLowerCase()
        .includes(searchWord.toLowerCase())
      }
      if (filters.length) {
        if (separately) {
          check = check && filters.some(flag => {          
            return item.flags.includes(flag.toLowerCase()) 
          })
        } else {
          check = filters.reduce((value,flag) => {          
            return value && item.flags.includes(flag.toLowerCase()) 
          })
        }
       
      }
      return check;
    });

  }
}