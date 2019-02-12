import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  private items: {}[] = []
  private itemsPerPage: number = 100

  constructor() {
    this.items = Array.from(new Array(100000), (v, i) => {
      return {
        value: i
      };
    })
  }

  setItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
  }

  getList(page: number = 0) {
    console.log('generating ...')
    return this.items.slice(page * this.itemsPerPage, page * this.itemsPerPage + this.itemsPerPage)
  }

}
