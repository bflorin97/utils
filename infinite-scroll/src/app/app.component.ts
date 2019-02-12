import { Component, OnInit } from '@angular/core';
import { DataGeneratorService } from './data-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private items: {}[]
  private currentPage: number = 0;
  private maxPerPage: number = 50;
  private updateRate: number = 0.2;

  constructor(private generator: DataGeneratorService) { }

  ngOnInit(): void {
    this.generator.setItemsPerPage(this.maxPerPage)
    this.items = this.generator.getList(this.currentPage);
  }

  onScroll(): void {
    this.currentPage++;

    this.items.splice(0, this.maxPerPage)
    this.items.push(...this.generator.getList(this.currentPage * this.updateRate))

    console.log('down', this.items.length, this.currentPage)
  }

  onScrollUp(): void {
    if (this.currentPage > 0) {
      this.currentPage--;

      this.items.splice(this.items.length - this.maxPerPage, this.maxPerPage)
      this.items.unshift(...this.generator.getList(this.currentPage * this.updateRate))
      this.items.push(...this.generator.getList(this.currentPage * this.updateRate))

      console.log('up  ', this.items.length, this.currentPage)
    }
  }
}
