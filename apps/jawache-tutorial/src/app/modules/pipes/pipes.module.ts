import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async/async.component';
import {PanelModule} from 'primeng/panel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservableasyncComponent } from './observableasync/observableasync.component';


@NgModule({
  declarations: [
    AsyncComponent,
    ObservableasyncComponent
  ],
  exports: [AsyncComponent, ObservableasyncComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PanelModule
  ]
})
export class PipesModule { }
