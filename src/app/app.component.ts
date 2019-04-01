import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import {VERSION} from '@angular/flex-layout';
import { AngularVersionInformationService } from './shared/angular-version-information.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  version = VERSION.full;
  angularVersion: string;
  
  constructor(private ngVersion: AngularVersionInformationService) { }

  ngOnInit(): void {
    this.angularVersion = this.ngVersion.versionFull;
  }
}
