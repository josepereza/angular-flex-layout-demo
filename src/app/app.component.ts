import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { VERSION } from '@angular/flex-layout';
import { AngularVersionInformationService } from './shared/angular-version-information.service';
import { MaterialVersionInformationService } from './shared/material-version-information.service';
import { AngularFLexLayoutVersionInformationService } from './shared/angular-flex-layout-version-information.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  angularVersion: string;
  materialVersion: string;
  angularFlexVersion: string;

  constructor(
    private ngVersion: AngularVersionInformationService,
    private matVersion: MaterialVersionInformationService,
    private ngFlexVersion: AngularFLexLayoutVersionInformationService
  ) {}

  ngOnInit(): void {
    this.angularVersion = this.ngVersion.versionFull;
    this.materialVersion = this.matVersion.versionFull;
    this.angularFlexVersion = this.ngFlexVersion.versionFull;
  }
}
