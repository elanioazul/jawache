import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { JokeComponent } from './components/joke/joke.component';

import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent, 
    JokeFormComponent, 
    JokeListComponent, 
    JokeComponent, BtnComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
