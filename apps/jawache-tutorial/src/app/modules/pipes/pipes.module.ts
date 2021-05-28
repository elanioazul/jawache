import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async/async.component';
import {PanelModule} from 'primeng/panel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservableasyncComponent } from './observableasync/observableasync.component';
import { CustomizedpipePipe } from './customizedpipe.pipe';
import { ComponenttotestcustomizedpipeComponent } from './componenttotestcustomizedpipe/componenttotestcustomizedpipe.component';


@NgModule({
  declarations: [
    AsyncComponent,
    ObservableasyncComponent,
    CustomizedpipePipe,
    ComponenttotestcustomizedpipeComponent
  ],
  exports: [AsyncComponent, ObservableasyncComponent, ComponenttotestcustomizedpipeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PanelModule
  ]
})
export class PipesModule { }
