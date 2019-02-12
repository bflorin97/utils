import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: {}[] = Array.from(new Array(10), (value, index) => {
    return {
      column1: 'Column 1 --- ' + Math.pow(10, index),
      column2: 'Column 2 --- ' + Math.pow(10, index),
      column3: 'Column 3 --- ' + Math.pow(10, index),
      column4: 'Column 4 --- ' + Math.pow(10, index),
      column5: 'Column 5 --- ' + Math.pow(10, index),
    }
  })
}
