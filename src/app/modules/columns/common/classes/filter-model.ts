import { Item } from "./item";

export class FilterModel {
  filters: any;
  constructor() {
    this.filters = [
      'flower', 'heart', 'sun', 'flash'
    ].map(item => {
      return { 
        name: item,
        active: true
      }
    })
  }
}
