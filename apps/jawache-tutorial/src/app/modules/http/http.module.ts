import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampledemoComponent } from './components/sampledemo/sampledemo.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SampledemoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [SampledemoComponent]
})
export class myHttpModule { }
