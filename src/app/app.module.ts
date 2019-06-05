import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { YBA_BREAKPOINT_PROVIDER } from './stack-overflow/hide-custom-bp/hide-with-custom-bp.component';
import { WatermarkComponent } from './watermark.component';
import { CustomMaterialModule } from './shared/custom-material.module';

const EXTRA_BREAKPOINTS = [
  {
    alias: 'xs.landscape',
    suffix: 'XsLandscape',
    mediaQuery: 'screen and (orientation: landscape) and (max-width: 559px)',
    priority: 1000,
    overlapping: false
  }
];

@NgModule({
  declarations: [AppComponent, WatermarkComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RoutingModule,
    CustomMaterialModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireModule,
    AngularFirestore,
    YBA_BREAKPOINT_PROVIDER,
    {
      provide: BREAKPOINT,
      useValue: EXTRA_BREAKPOINTS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
