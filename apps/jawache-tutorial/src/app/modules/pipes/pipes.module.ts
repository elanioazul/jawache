import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async/async.component';
import {PanelModule} from 'primeng/panel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AsyncComponent
  ],
  exports: [AsyncComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PanelModule
  ]
})
export class PipesModule { }
