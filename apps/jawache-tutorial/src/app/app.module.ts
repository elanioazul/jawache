import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { myFormModule } from './modules/form/form.module'
import { PipesModule } from './modules/pipes/pipes.module';
import { DepinjectModule } from './modules/depinject/depinject.module';
import { myHttpModule } from './modules/http/http.module';
import { HttpobservablesModule } from './modules/httpobservables/httpobservables.module';
import { SearchService } from './modules/httpobservables/services/search.service'

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
    HttpClientModule,
    PanelModule,
    CardModule,
    ButtonModule,
    myFormModule,
    PipesModule,
    DepinjectModule,
    myHttpModule,
    HttpobservablesModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
