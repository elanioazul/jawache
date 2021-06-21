import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperappComponent } from './components/superapp/superapp.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SuperappComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [SuperappComponent]
})
export class HttppromisesModule { }
