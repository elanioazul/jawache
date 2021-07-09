import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperappComponent } from './components/superapp/superapp.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    SuperappComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    RouterModule
  ],
  exports: [HeaderComponent, HomeComponent,SuperappComponent]
})
export class HttppromisesModule { }
