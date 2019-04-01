import {Component} from '@angular/core';

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

@Component({
  selector: 'demo-layout-gap',
  templateUrl: './layout-gap.component.html'
})
export class LayoutGapComponent {
  direction = 'row';

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}
