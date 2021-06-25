import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeahhhhComponent } from './components/yeahhhh/yeahhhh.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    YeahhhhComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [YeahhhhComponent]
})
export class HttpobservablesModule { }
