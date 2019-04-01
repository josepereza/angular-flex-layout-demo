import { Component, Directive } from '@angular/core';
import { BREAKPOINT, ShowHideDirective } from '@angular/flex-layout';

const YBA_BREAKPOINT = {
  alias: 'yba',
  suffix: 'Yba',
  mediaQuery: 'screen and (max-height: 600px)',
  overlapping: false
};

export const YBA_BREAKPOINT_PROVIDER = {
  provide: BREAKPOINT,
  useValue: [YBA_BREAKPOINT],
  multi: true
};

const inputs = ['fxHide', 'fxHide.yba'];
const selector = `[fxHide], [fxHide.yba]`;

@Directive({ selector, inputs })
export class CustomHideDirective extends ShowHideDirective {
  protected inputs = inputs;
}

@Component({
  selector: 'demo-hide-custom-bp',
  styleUrls: ['hide-custom-bp.component.scss'],
  templateUrl: './hide-custom-bp.component.html'
})
export class HideWithCustomBPComponent {}
