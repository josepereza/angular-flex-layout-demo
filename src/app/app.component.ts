import { Component, ViewEncapsulation, OnInit } from '@angular/core';
//
import { AngularVersionInformationService } from './shared/angular-version-information.service';
import { MaterialVersionInformationService } from './shared/material-version-information.service';
import { AngularFLexLayoutVersionInformationService } from './shared/angular-flex-layout-version-information.service';
// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { SDK_VERSION as firebaseSdkVersionInfo } from 'firebase';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFirestore, AngularFireModule]
})
export class AppComponent implements OnInit {
  angularVersion: string;
  materialVersion: string;
  angularFlexVersion: string;
  private _fireBaseSDKVersion: string;

  constructor(
    private ngVersion: AngularVersionInformationService,
    private matVersion: MaterialVersionInformationService,
    private ngFlexVersion: AngularFLexLayoutVersionInformationService
  ) {}

  ngOnInit(): void {
    this.angularVersion = this.ngVersion.versionFull;
    this.materialVersion = this.matVersion.versionFull;
    this.angularFlexVersion = this.ngFlexVersion.versionFull;
    this._fireBaseSDKVersion = firebaseSdkVersionInfo;
  }

  public get fireBaseSdkVersion(): string {
    return this._fireBaseSDKVersion;
  }
}
