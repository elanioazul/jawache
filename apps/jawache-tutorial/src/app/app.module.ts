import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { myFormModule } from './modules/form/form.module'

import { AppComponent } from './app.component';

import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';
import { BtnComponent } from './components/btn/btn.component';

import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { JokeComponent } from './components/joke/joke.component';
import { CardHoverDirective } from './directives/card-hover.directive';

@NgModule({
  declarations: [
    AppComponent, 
    JokeFormComponent, 
    JokeListComponent, 
    BtnComponent, JokeComponent, CardHoverDirective
  ],
  imports: [
    BrowserModule,
    PanelModule,
    CardModule,
    ButtonModule,
    myFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
